<template>
  <tabs
    active-color="blue"
    fill>
    <tab title="First Tab">
      Content of first tab
    </tab>
    <tab
      title="Second Tab"
      active>
      Content of second tab
    </tab>
    <tab title="Third Tab">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend hendrerit felis, sit amet convallis risus sollicitudin id. Donec nec mollis enim. Aliquam porttitor in ligula eu malesuada. Etiam id condimentum nisl, ut rutrum diam. Pellentesque quis odio mollis massa facilisis aliquam ut vitae nisi. Ut eleifend nibh justo, id commodo ipsum auctor at. Maecenas pellentesque ligula eget iaculis rutrum. Morbi pellentesque urna sit amet accumsan aliquet. Ut eget elit vel odio venenatis tempus non at libero. Morbi quis sem ac ante vestibulum gravida vitae id nulla. Aenean ac laoreet lorem, ac tincidunt enim. Nam vitae dignissim neque. Phasellus ipsum nunc, molestie at fermentum eu, tincidunt ut nibh. Suspendisse quis molestie risus. Nam dictum massa sit amet turpis vulputate ultrices. Duis sodales semper iaculis.
    </tab>
  </tabs>
</template>

<script>
import Tabs from "../components/Tabs.vue"
import Tab from "../components/Tab.vue"

export default {
  name: "Example03",
  components: { Tabs, Tab },
  data () {
    return {}
  },
}
</script>

<style>

</style>
