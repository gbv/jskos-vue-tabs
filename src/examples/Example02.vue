<template>
  <div>
    <button @click="prependTab">
      Add tab before
    </button>
    <button @click="appendTab">
      Add tab after
    </button>
    Current tab Index: {{ tabIndex }}
    <button @click="jumpToRandom">
      Jump to random tab
    </button>
    <button @click="hiddenTabs.push(tabIndex)">
      Hide current tab
    </button>
    <button @click="hiddenTabs = []">
      Unhide all tab
    </button>
    <tabs
      v-model="tabIndex"
      @change="tabChanged">
      <tab
        v-for="(tab, index) in tabs"
        :key="`example02-${tab}`"
        :hidden="hiddenTabs.includes(index)"
        :title="tab">
        Content of {{ tab }}
      </tab>
      <template #title="slotProps">
        {{ slotProps.tab.title }}
        <div
          class="closeButton"
          @click.stop="closeTab(slotProps.index)">
          x
        </div>
      </template>
    </tabs>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue"
import Tab from "../components/Tab.vue"

export default {
  name: "Example02",
  components: { Tabs, Tab },
  data () {
    return {
      tabIndex: 0,
      tabs: ["A tab", "Hidden by default", "Another tab"],
      hiddenTabs: [1],
      tabCount: 0,
    }
  },
  watch: {
    tabs() {
      this.tabCount += 1
    },
  },
  methods: {
    prependTab() {
      this.tabs = [`Tab ${this.tabCount}`].concat(this.tabs)
      // Increase hidden tab indexes by 1
      this.hiddenTabs = this.hiddenTabs.map(i => i + 1)
    },
    appendTab() {
      this.tabs = this.tabs.concat(`Tab ${this.tabCount}`)
    },
    jumpToRandom() {
      this.tabIndex = Math.floor(Math.random() * this.tabs.length)
    },
    tabChanged({ index, tab }) {
      console.log("[Example02] Tab changed to index", index, "with tab", tab)
    },
    closeTab(index) {
      this.tabs = [
        ...this.tabs.slice(0, index),
        ...this.tabs.slice(index + 1),
      ]
      // Decrease hidden tab indexes by 1 (for all tabs after the closed tab)
      this.hiddenTabs = this.hiddenTabs.map(i => i - (i >= index ? 1 : 0))
    },
  },
}
</script>

<style>
.closeButton {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.closeButton:hover {
  color: red;
  cursor: pointer;
}
</style>
