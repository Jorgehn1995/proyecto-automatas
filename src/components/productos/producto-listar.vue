<template>
  <div>
    <producto-crear @success="init()"></producto-crear>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Vencimiento</th>
            <th>Existencias</th>

            <th>
              Estado
            </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading && !items.length == 0">
            <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
            <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
            <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
            <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
            <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
            <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
          </tr>
          <tr v-else-if="items.length == 0">
            <td colspan="6" class="text-center">
              No hay registros para mostrar
            </td>
          </tr>
          <template v-else>
            <tr v-for="item, i in items">
              <td>
                {{ item.nombre }}
              </td>
              <td>{{ item.precio }}</td>
              <td>{{ item.fecha_vencimiento }}</td>
              <td>{{ item.existencias }}</td>

              <td>

                <v-chip :color="estados[item.estado].color" rounded small dark>
                  {{ estados[item.estado].text }}
                </v-chip>
              </td>

              <td>
                <v-sheet class="d-flex">
                  <producto-editar :productoId="item.producto_id" @success="init()"></producto-editar>
                  <producto-eliminar class="ml-2" :productoId="item.producto_id" @success="init()"></producto-eliminar>
                </v-sheet>
              </td>
            </tr>
          </template>

        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import ProductoEliminar from './producto-eliminar.vue'
import ProductoEditar from './producto-editar.vue'
import ProductoCrear from './producto-crear.vue'
export default {
  components: { ProductoCrear, ProductoEditar, ProductoEliminar },
  name: "producto-listar",
  mounted() {
    this.init();
  },
  data: () => ({
    isLoading: true,
    estados: [
      { text: "Ingresado", color: "grey" },
      { text: "Facturado", color: "blue" },
      { text: "Disponible", color: "green" },
      { text: "Agotado", color: "error" }

    ],
    items: []
  }),
  methods: {
    async init() {
      if (this.items.length == 0) {
        this.isLoading = true;
      }
      try {
        const result = await this.$api.get("/productos");


        this.items = result.data;
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    }
  }
}
</script>

<style></style>