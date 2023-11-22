<template>
  <!-- Contenedor principal de la aplicación Vue.js -->
  <div id="app">
    <!-- Barra de navegación -->
    <nav>
      <!-- Enlace a la página principal ("/") -->
      <router-link to="/">Home</router-link> |
      <!-- Se ha eliminado el enlace "/about" y se ha añadido el enlace "/todo-list". -->
      <router-link to="/todo-list">TodoList</router-link> |

      <router-link to="/todo-issues">Todos Issues</router-link> |

      <router-link to="/issue-list">Issue list</router-link>
    </nav>
    <!-- Componente de vista de enrutador que mostrará los componentes asociados a las rutas -->
    <router-view />
  </div>
</template>

<style>
/* Estilos globales para la aplicación */

#app {
  /* Estilos para el contenedor principal de la aplicación */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  /* Estilos para la barra de navegación */
  padding: 30px;
}

nav a {
  /* Estilos para los enlaces dentro de la barra de navegación */
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  /* Estilos específicos para el enlace activo (resaltado) */
  color: #42b983;
}
</style>
