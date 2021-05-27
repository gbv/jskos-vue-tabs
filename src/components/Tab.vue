<template>
  <div
    v-show="isActive"
    class="jskos-vue-tabs-content">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue"
/**
 * Returns a random v4 UUID.
 *
 * from: https://gist.github.com/jed/982883
 */
function uuid(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)}

export default defineComponent({
  name: "Tab",
  props: {
    id: {
      type: String,
      default: uuid(),
    },
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
