<template>
  <v-app>
    <!-- Barra Superior -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="app-title">🌸 Factory Nails 🌸</v-toolbar-title>
    </v-app-bar>

    <!-- Menú Lateral -->
    <v-navigation-drawer
        app
        v-model="drawer"
        color="secondary"
        class="menu-container"
    >
      <v-list dense class="menu-list">
        <v-list-item
            v-for="item in menuItems"
            :key="item.text"
            @click="navigate(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido Principal -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      menuItems: [
        { text: "Inicio", route: "/", icon: "mdi-home" },
        { text: "Usuarios", route: "/users", icon: "mdi-account" },
        { text: "Configuración", route: "/settings", icon: "mdi-cog" },
      ],
    };
  },
  methods: {
    navigate(route) {
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style>
/* Menú lateral: elimina espacios y ajusta posición */
.menu-container {
  margin: 0;
  padding-top: 10px; /* Baja las opciones del menú ligeramente */
}

/* Lista del menú */
.menu-list {
  margin-top: 30px; /* Desplaza el contenido del menú más abajo */
}

/* Texto del menú */
.menu-text {
  font-weight: bold;
  font-size: 1.6rem; /* Tamaño aumentado del texto */
  margin-left: 8px; /* Espaciado entre ícono y texto */
  color: #ffffff; /* Mantiene el texto blanco */
}

/* Íconos del menú */
.v-icon {
  font-size: 36px; /* Tamaño original de los íconos */
}

/* Título de la barra superior */
.app-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}
</style>
