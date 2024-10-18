<template>
  <div>
    <v-card outlined class="rounded-xl" elevation="0">
      <v-card-title>
        Productos
      </v-card-title>
      <v-card-subtitle>
        Administra los productos de tu tienda
      </v-card-subtitle>
      <v-card-text>
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
                  Control
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
                    <v-chip v-if="item.control == 'Disponible'" color="green" rounded small dark>
                      {{ item.control }}
                    </v-chip>
                    <v-chip v-else-if="item.control == 'Bajo Stock'" color="warning" rounded small dark>
                      {{ item.control }}
                    </v-chip>
                    <v-chip v-else color="error" rounded small dark>
                      {{ item.control }}
                    </v-chip>
                  </td>

                  <td>
                    <v-sheet class="d-flex">
                      <producto-editar :productoId="item.producto_id" @success="init()"></producto-editar>
                      <producto-eliminar class="ml-2" :productoId="item.producto_id"
                        @success="init()"></producto-eliminar>
                    </v-sheet>
                  </td>
                </tr>
              </template>

            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
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