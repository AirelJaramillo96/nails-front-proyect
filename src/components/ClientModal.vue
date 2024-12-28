<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card class="rounded-card">
      <!-- Header con color rosa tenue -->
      <v-card-title class="headline d-flex align-center justify-space-between pastel-header">
        <span class="modal-title">
          {{ client ? "Editar Cliente" : "Agregar Cliente" }}
        </span>
        <v-icon color="white">mdi-account</v-icon>
      </v-card-title>

      <!-- Cuerpo del modal -->
      <v-card-text>
        <v-form ref="form">
          <v-text-field
              v-model="form.name"
              label="Nombre"
              outlined
              class="input-field first-input"
              required
          ></v-text-field>
          <v-text-field
              v-model="form.email"
              label="Correo Electrónico"
              outlined
              class="input-field compact-input"
              required
          ></v-text-field>
          <v-text-field
              v-model="form.phone"
              label="Teléfono"
              outlined
              class="input-field compact-input"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <!-- Acciones -->
      <v-card-actions class="modal-actions">
        <v-btn color="red" text @click="closeModal">
          CANCELAR
        </v-btn>
        <v-btn color="green" text @click="save">
          GUARDAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    client: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      dialog: this.value,
      form: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  watch: {
    value(val) {
      this.dialog = val;
      if (this.client) {
        this.form = { ...this.client };
      } else {
        this.form = { name: "", email: "", phone: "" };
      }
    },
    dialog(val) {
      this.$emit("input", val);
    },
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
    save() {
      this.$emit("save", { ...this.form });
      this.closeModal();
    },
  },
};
</script>

<style scoped>
/* Fondo blanco y header rosa tenue */
.rounded-card {
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  background-color: white; /* Fondo blanco */
}

.pastel-header {
  background-color: #f8bbd0; /* Rosa tenue */
  color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
}

.modal-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.input-field {
  margin-bottom: 12px; /* Menor espacio entre inputs */
}

.first-input {
  margin-top: 24px; /* Separación extra del header */
}

.compact-input {
  margin-bottom: 8px; /* Más compacto entre inputs */
}

.modal-actions {
  justify-content: space-between;
}

.modal-actions v-btn {
  font-weight: bold;
  font-size: 1rem;
}
</style>
