<template>
  <div
    ref="root"
    :class="rootClasses">
    <div class="cocoda-vue-tabs-header">
      <div
        v-for="(tab, index) in tabs"
        v-show="!hiddenTabs[index]"
        :key="`cocoda-vue-tabs-${index}`"
        class="cocoda-vue-tabs-header-item"
        :class="{
          'cocoda-vue-tabs-header-item-active': tab.isActive,
          'cocoda-vue-tabs-header-item-inactive': !tab.isActive,
          'cocoda-vue-tabs-header-item-fill': fill,
        }"
        :style="{
          'flex-basis': fill ? fillMinWidth : 'auto',
          'border-bottom-color': activeColor,
        }"
        @click="activateTab(index)">
        <slot
          :tab="tab"
          :index="index"
          name="title">
          {{ tab.title }}
        </slot>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "Tabs",
  props: {
    /**
     * Index of current tab, use with v-model.
     */
    modelValue: {
      type: Number,
      default: null,
    },
    /**
     * Border color for active tab
     */
    activeColor: {
      type: String,
      default: "red",
    },
    /**
     * If true, the tabs will spread over the available space.
     */
    fill: {
      type: Boolean,
      default: false,
    },
    /**
     * Needed if `flex` is true and it is expected that number of tabs will exceed one row.
     */
    fillMinWidth: {
      type: String,
      default: "0",
    },
    /**
     * If true, borders will be shown. Alternatively, you can provide a string that contains one or more of "top", "right", "bottom", "left" for partial borders.
     *
     * Override the CSS class `cocoda-vue-tabs-border-{all|top|right|bottom|left}` to adjust borders.
     */
    borders: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Size of table. One of `sm`, `md`, `lg`.
     */
    size: {
      type: String,
      default: null,
    },
  },
  emits: ["update:modelValue", "change"],
  data () {
    return {
      activeTab: null,
      activeTabIndex: 0,
      tabs: [],
    }
  },
  computed: {
    _size() {
      if (["sm", "md", "lg"].includes(this.size)) {
        return this.size
      }
      return "md"
    },
    rootClasses() {
      let borderClassPrefix = "cocoda-vue-tabs-border-"
      let classes = {
        "cocoda-vue-tabs": true,
        [`cocoda-vue-tabs-${this._size}`]: true,
      }
      if (this.borders === false) {
        return classes
      }
      if (this.borders === true) {
        classes[`${borderClassPrefix}all`] = true
        return classes
      }
      for (let side of ["top", "right", "bottom", "left"]) {
        if (this.borders.includes(side)) {
          classes[`${borderClassPrefix}${side}`] = true
        }
      }
      return classes
    },
    hiddenTabs() {
      return this.tabs.map(tab => tab.hidden)
    },
  },
  watch: {
    tabs(tabs) {
      // Find index of active tab
      let index = tabs.findIndex(tab => this.activeTab == tab)
      index = index == -1 ? (this.modelValue !== null ? this.modelValue : this.activeTabIndex) : index
      this.activateTab(index)
    },
    modelValue(index) {
      this.activateTab(index)
    },
    hiddenTabs() {
      this.activateTab(this.activeTabIndex)
    },
  },
  mounted () {

  },
  methods: {
    registerTab(tab) {
      const index = Array.from(this.$refs.root.children).indexOf(tab.$el) - 1
      this.tabs.splice(index, 0, tab)
      if (tab.isActive) {
        this.activateTab(index)
      }
    },
    unregisterTab(tab) {
      this.tabs = this.tabs.filter(t => t != tab)
    },
    activateTab (index) {
      if (this.tabs.length > 0) {
        // Cap index at count of tabs
        if (index >= this.tabs.length) {
          index = this.tabs.length - 1
        }
        // Switch to nearest non-hidden tab
        let diff = 0
        while (index - diff >= 0 || index + diff < this.hiddenTabs.length) {
          if (this.hiddenTabs[index + diff] === false) {
            index = index + diff
            break
          }
          if (this.hiddenTabs[index - diff] === false) {
            index = index - diff
            break
          }
          diff += 1
        }
        // Deactive all tabs
        for (let tab of this.tabs) {
          tab.isActive = false
        }
        let tab = this.tabs[index]
        tab.isActive = true
        if (this.activeTab != tab || this.activeTabIndex != index) {
          this.activeTab = tab
          this.activeTabIndex = index
          this.$emit("update:modelValue", index)
          this.$emit("change", { index, tab })
        }
      }
    },
  },
})
</script>

<style scoped>
.cocoda-vue-tabs {
  display: flex;
  flex-direction: column;
}

.cocoda-vue-tabs-border-all {
  border: 1px solid rgba(132,141,149,0.2);
  border-radius: 8px;
}
.cocoda-vue-tabs-border-top {
  border-top: 1px solid rgba(132,141,149,0.2);
}
.cocoda-vue-tabs-border-right {
  border-right: 1px solid rgba(132,141,149,0.2);
}
.cocoda-vue-tabs-border-bottom {
  border-bottom: 1px solid rgba(132,141,149,0.2);
}
.cocoda-vue-tabs-border-left {
  border-left: 1px solid rgba(132,141,149,0.2);
}

/* Fixed header classes */
.cocoda-vue-tabs-header {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(132,141,149,0.2);
  margin-bottom: -1px;
}
.cocoda-vue-tabs-header-item {
  box-sizing: content-box;
  position: relative;
  margin: 0 2px;
  border-top: 3px solid transparent;
  font-weight: bold;
}
.cocoda-vue-tabs-header-item:first-child {
  margin-left: 0;
}
.cocoda-vue-tabs-header-item:last-child {
  margin-right: 0;
}
.cocoda-vue-tabs-header-item:hover {
  cursor: pointer;
}

/* Flexible header classes */
.cocoda-vue-tabs-header-item-inactive {
  color: #848d95;
}
.cocoda-vue-tabs-header-item-inactive:hover {
  background-color: rgba(132,141,149,0.05);
}
.cocoda-vue-tabs-header-item-active {
  background-color: rgba(132,141,149,0.05);
}
.cocoda-vue-tabs-header-item-active:hover {
  cursor: auto;
}

/* Classes activated by options */
.cocoda-vue-tabs-header-item-fill {
  flex-grow: 1;
  flex-shrink: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cocoda-vue-tabs-sm {
  font-size: 0.85rem;
}
.cocoda-vue-tabs-md {
  font-size: 1rem;
}
.cocoda-vue-tabs-lg {
  font-size: 1.2rem;
}
.cocoda-vue-tabs-sm .cocoda-vue-tabs-header-item {
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
}
.cocoda-vue-tabs-md .cocoda-vue-tabs-header-item {
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
}
.cocoda-vue-tabs-lg .cocoda-vue-tabs-header-item {
  height: 48px;
  line-height: 48px;
  padding: 0 15px;
}
.cocoda-vue-tabs-sm .cocoda-vue-tabs-header-item-inactive {
  padding-bottom: 2px;
}
.cocoda-vue-tabs-md .cocoda-vue-tabs-header-item-inactive {
  padding-bottom: 3px;
}
.cocoda-vue-tabs-lg .cocoda-vue-tabs-header-item-inactive {
  padding-bottom: 5px;
}
.cocoda-vue-tabs-sm .cocoda-vue-tabs-header-item-active {
  border-bottom: 2px solid transparent;
}
.cocoda-vue-tabs-md .cocoda-vue-tabs-header-item-active {
  border-bottom: 3px solid transparent;
}
.cocoda-vue-tabs-lg .cocoda-vue-tabs-header-item-active {
  border-bottom: 5px solid transparent;
}
</style>
