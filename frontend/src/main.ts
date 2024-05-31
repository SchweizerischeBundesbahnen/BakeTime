import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import container from './core/plugins/container'
import appContainerDefinition, { AppContainerKey } from './core/container/app-container'

function instantiateApp() {
  const app = createApp(App)

  app.use(container, {
    providerKeys: AppContainerKey,
    definition: appContainerDefinition
  })

  app.use(router)
  app.mount('#app')
}

instantiateApp()
