<template>
  <tabs>
    <tab title="First Tab">
      Content of first tab
    </tab>
    <tab
      title="Second Tab">
      Content of second tab
    </tab>
    <tab title="Third Tab (longer title)">
      Content of third tab
    </tab>
  </tabs>
</template>

<script>
import Tabs from "../components/Tabs.vue"
import Tab from "../components/Tab.vue"

export default {
  name: "Example01",
  components: { Tabs, Tab },
  data () {
    return {}
  },
}
</script>

<style>

</style>
