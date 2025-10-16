import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify, Dialog, Loading, LoadingBar, BottomSheet } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {
    Notify,       // Snackbar/Toast notifications
    Dialog,       // Dialogs and confirmations
    Loading,      // Global loading overlay
    LoadingBar,   // Top progress bar
    BottomSheet,  // Mobile bottom sheets
  },
  config: {
    notify: {
      position: 'top-right',
      timeout: 2500,
      textColor: 'white',
      actions: [{ icon: 'close', color: 'white' }]
    },
    loading: {
      /* Loading defaults */
    },
    loadingBar: {
      color: 'primary',
      size: '4px',
      position: 'top'
    }
  }
})

app.mount('#app')
