<template>
  <div>
    <v-container>
      <div>
        <producto-listar></producto-listar>
      </div>
    </v-container>
  </div>
</template>

<script>
import ProductoListar from '../components/productos/producto-listar.vue'


export default {
  components: { ProductoListar },
  name: 'Home',
}
</script>
