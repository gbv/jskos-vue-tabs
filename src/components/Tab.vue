<template>
  <div
    v-show="isActive"
    class="cocoda-vue-tabs-content">
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
  computed: {

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
.cocoda-vue-tabs-content {
  flex: 1;
  overflow: scroll;
}
.cocoda-vue-tabs-sm .cocoda-vue-tabs-content {
  padding: 10px 8px 8px 8px;
}
.cocoda-vue-tabs-md .cocoda-vue-tabs-content {
  padding: 13px 10px 10px 10px;
}
.cocoda-vue-tabs-lg .cocoda-vue-tabs-content {
  padding: 16px 15px 15px 15px;
}

</style>
