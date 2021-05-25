<template>
  <div>
    <h1>cocoda-vue-tabs</h1>
    <a href="https://github.com/stefandesu/cocoda-vue-tabs">https://github.com/stefandesu/cocoda-vue-tabs</a>
    <h2>Examples:</h2>
    <h3>Simple tabs with no extras</h3>
    <example-01 />
    <h3>Dynamically add, change, or remove tabs</h3>
    <example-02 />
    <h3>Tabs with fill and variable height content</h3>
    <example-03 />
    <h3>Tabs with fixed width and height and bottom border (demonstrates scrolling)</h3>
    <example-04 />
    <h3>Simple table in small with borders</h3>
    <example-05 />
    <h3>Simple table in large with borders</h3>
    <example-06 />
  </div>
</template>

<script>
import { defineComponent } from "vue"
import Example01 from "./examples/Example01.vue"
import Example02 from "./examples/Example02.vue"
import Example03 from "./examples/Example03.vue"
import Example04 from "./examples/Example04.vue"
import Example05 from "./examples/Example05.vue"
import Example06 from "./examples/Example06.vue"

export default defineComponent({
  name: "App",
  components: {
    Example01,
    Example02,
    Example03,
    Example04,
    Example05,
    Example06,
  },
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
}
#app > div {
  max-width: 800px;
  margin: 60px auto 0 auto;
}
</style>
