import { createApp } from 'vue';

// App
import App from './App.vue';

// Pinia
import { createPinia } from 'pinia';
// FormKit
import { defaultConfig, plugin } from '@formkit/vue';

createApp(App)
  .use(createPinia())
  .use(plugin, defaultConfig())
  .mount('#app');