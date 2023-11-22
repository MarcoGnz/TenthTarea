// Importar la biblioteca Vue.
import Vue from 'vue'
// Importar el componente principal de la aplicación.
import App from './App.vue'
// Importar el enrutador de la aplicación.
import router from './router'
// Importar ElementUI y sus archivos CSS asociados.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Configuración para desactivar la advertencia de producción de Vue.
Vue.config.productionTip = false
// Instalar ElementUI como un plugin de Vue.
Vue.use(ElementUI);

// Crear una nueva instancia de Vue.
new Vue({
  // Configurar el enrutador.
  router,
  // Renderizar el componente principal de la aplicación.
  render: h => h(App)
}).$mount('#app') // Montar la aplicación en el elemento con el ID 'app'.
