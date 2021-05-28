<template>
  <div
    v-show="isActive"
    class="jskos-vue-tabs-content">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "Tab",
  props: {
    title: {
      type: String,
      default: "Tab",
    },
    active: {
      type: Boolean,
      default: false,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isActive: false,
    }
  },
  mounted () {
    this.isActive = this.active
    this.$parent.registerTab(this)
  },
  unmounted () {
    this.$parent.unregisterTab(this)
  },
})
</script>

<style scoped>

/* Content classes */
.jskos-vue-tabs-content {
  flex: 1;
  overflow: scroll;
  position: relative;
}
.jskos-vue-tabs-sm .jskos-vue-tabs-content {
  padding: 10px 8px 8px 8px;
}
.jskos-vue-tabs-md .jskos-vue-tabs-content {
  padding: 13px 10px 10px 10px;
}
.jskos-vue-tabs-lg .jskos-vue-tabs-content {
  padding: 16px 15px 15px 15px;
}

</style>
