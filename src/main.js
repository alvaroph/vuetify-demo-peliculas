/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import VueSocketIO from 'vue-socket.io';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
