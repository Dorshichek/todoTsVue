import {createApp} from 'vue'
import App from './App.vue'
import components from "../src/components/Ui/index.js";

const app = createApp(App)

components.forEach((component: any) => {
  app.component(component.name, component)
})

app.mount('#app')
