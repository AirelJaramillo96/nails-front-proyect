<template>
  <v-container>
    <!-- Título y botón para agregar cliente -->
    <div class="header">
      <h1 class="view-title">Clientes</h1>
      <v-btn color="primary" dark @click="openModal(null)">
        <v-icon left>mdi-plus</v-icon>
        Agregar Cliente
      </v-btn>
    </div>

    <!-- Tabla de clientes -->
    <v-card class="rounded-card table-card">
      <v-data-table
          :headers="headers"
          :items="clients"
          :items-per-page="5"
          class="elevation-1 pastel-table"
          dense
      >
        <!-- Encabezado personalizado -->
        <template #top>
          <v-toolbar flat class="table-toolbar">
            <v-toolbar-title>Gestión de Clientes</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                label="Buscar"
                single-line
                clearable
                outlined
                dense
                class="search-field"
            ></v-text-field>
          </v-toolbar>
        </template>

        <!-- Acciones personalizadas -->
        <template #item.actions="{ item }">
          <v-btn icon @click="openModal(item)">
            <v-icon color="#4CAF50">mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteClient(item)">
            <v-icon color="#F44336">mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Modal de agregar/editar cliente -->
    <ClientModal
        v-model="modal"
        :client="selectedClient"
        @save="saveClient"
    />
  </v-container>
</template>

<script>
import ClientModal from "@/components/ClientModal.vue";

export default {
  components: {
    ClientModal,
  },
  data() {
    return {
      search: "", // Filtro de búsqueda
      modal: false, // Control del modal
      selectedClient: null, // Cliente seleccionado para editar
      clients: [
        { id: 1, name: "Juan Pérez", email: "juan@gmail.com", phone: "555-1234" },
        { id: 2, name: "Ana López", email: "ana@gmail.com", phone: "555-5678" },
      ],
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Correo Electrónico", value: "email" },
        { text: "Teléfono", value: "phone" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    openModal(client) {
      this.selectedClient = client;
      this.modal = true;
    },
    saveClient(client) {
      if (client.id) {
        // Editar cliente
        const index = this.clients.findIndex((c) => c.id === client.id);
        if (index !== -1) this.clients.splice(index, 1, client);
      } else {
        // Agregar cliente
        const newId = this.clients.length ? this.clients[this.clients.length - 1].id + 1 : 1;
        this.clients.push({ id: newId, ...client });
      }
      this.modal = false;
    },
    deleteClient(client) {
      const index = this.clients.findIndex((c) => c.id === client.id);
      if (index !== -1) this.clients.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Estilo de la cabecera */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

/* Título de la vista */
.view-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

/* Estilo de la tarjeta de la tabla */
.table-card {
  border-radius: 16px;
  overflow: hidden;
}

/* Estilo del toolbar superior */
.table-toolbar {
  background-color: #f8bbd0; /* Rosa tenue */
  color: white;
  padding: 10px 16px;
  font-weight: bold;
}

/* Estilo general de la tabla */
.pastel-table {
  background-color: #fff9fb; /* Blanco con tono pastel */
  border-radius: 16px;
  border: 1px solid #f8bbd0;
}

/* Estilo del campo de búsqueda */
.search-field {
  max-width: 300px;
}

/* Estilo de la cabecera de la tabla */
.v-data-table__wrapper th {
  background-color: #f8bbd0; /* Rosa tenue */
  color: white;
  font-weight: bold;
  text-align: center;
}

/* Estilo de las filas de la tabla */
.v-data-table__wrapper td {
  text-align: center;
}

/* Botones de acción */
.v-btn {
  margin: 0 4px;
}
</style>
