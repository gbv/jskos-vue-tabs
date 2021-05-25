import Tab from "./components/Tab.vue"
import Tabs from "./components/Tabs.vue"

// Install method so that it can be used as a plugin.
export const install = (vue) => {
  vue.component(Tabs.name, Tabs)
  vue.component(Tab.name, Tab)
}

export { Tab, Tabs }
