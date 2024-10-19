<template>
  <div>
    <v-container>

      <v-card outlined class="rounded-xl" elevation="0">
        <v-card-title>
          Bodega
        </v-card-title>
        <v-card-subtitle>
          Administra los productos
        </v-card-subtitle>
        <v-card-text>
          <producto-listar></producto-listar>
        </v-card-text>
      </v-card>


      <div>

      </div>
    </v-container>
  </div>
</template>

<script>
import ProductoListarAgotado from '../components/productos/producto-listar-agotado.vue'
import ProductoListar from '../components/productos/producto-listar.vue'


export default {
  components: { ProductoListar, ProductoListarAgotado },
  name: 'Home',
}
</script>
