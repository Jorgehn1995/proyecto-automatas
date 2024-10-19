<template>
  <div>
    <v-btn color="primary" depressed class="rounded-lg" @click="open">
      Ingresar Producto
    </v-btn>
    <v-dialog v-model="isOpen" width="600">
      <v-card outlined elevation="0" class="rounded-xl">
        <v-card-title>Nuevo Producto</v-card-title>
        <v-card-subtitle>Ingresa los datos de los productos</v-card-subtitle>
        <v-card-text>
          <v-form ref="form" lazy-validation id="producto-crear" @submit.prevent="procesar">
            <v-row>
              <v-col cols="12">
                <span>
                  Informacion General
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled ref="first" label="Nombre" v-model="producto.nombre"
                  :rules="[rules.nombre]"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled label="Vencimiento" :rules="[rules.fechaValida]"
                  v-model="producto.fecha_vencimiento"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled label="Existencias" :rules="[rules.existencias]"
                  v-model="producto.existencias"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled label="Precio" prefix="Q" :rules="[rules.precio]"
                  v-model="producto.precio"></v-text-field>
              </v-col>
              <v-col cols="12">
                <span>
                  Informacion de Compra
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled label="Factura" v-model="producto.factura"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled label="Serie" v-model="producto.serie"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field filled label="Costo" prefix="Q" :rules="[rules.precio]"
                  v-model="producto.costo"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-checkbox v-model="producto.pagado" label="Producto Pagado"></v-checkbox>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="isOpen = false">
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn type="submit" form="producto-crear" color="primary" depressed :loading="isLoading">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import rules from "@/utils/regex"
import { automataStock } from "@/utils/automatas";
export default {
  name: "producto-crear",
  data: () => ({
    isLoading: false,
    isOpen: true,
    producto: {
      nombre: "",
      precio: "",
      fecha_vencimiento: "",
      existencias: "",
      factura: "",
      serie: "",
      costo: "",
      pagado: false
    },
    rules
  }),
  methods: {
    open() {

      this.isOpen = true;
      setTimeout(() => {
        this.$refs.form.reset();
        this.$refs.first.$refs.input.focus();
      }, 10);
    },
    async procesar() {

      if (this.$refs.form.validate()) {
        this.isLoading = true;
        try {
          const result = await this.$api.post("/productos", this.producto);
          this.$emit("success", result.data);
          this.isOpen = false;
        } catch (error) {
          console.log(error);
        }
      }
      this.isLoading = false;
    },
  }
}
</script>

<style>
.v-btn {
  border-radius: 8px;
}

.v-btn {
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.v-text-field__prefix {
  margin-top: 0px !important;
}

.v-text-field,
.v-text-field .v-input__control,
.v-text-field .v-icon,
.v-text-field .v-select__selections,
.v-text-field .v-select__selection {
  color: inherit !important;
}

.v-text-field .v-select__selection {
  padding-left: 5px;
}

.v-text-field .v-input__slot {
  border-radius: 12px;
}

.v-text-field .v-input__slot:before {
  border: 0px !important;

}

.v-text-field .v-input__slot::after {
  border: 0px !important;
}


.v-text-field .v-input {
  padding-top: 6px;
  align-items: center;
}
</style>