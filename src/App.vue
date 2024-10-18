<template>
  <v-app>
    <v-app-bar app color="transparent" dark height="90" elevation="0">
      <v-card width="100%" class="d-flex align-center pa-4 mx-2 mt-2 rounded-xl" color="primary">
        <div class=" d-flex align-center">
          <v-img alt="UMG Logo" class="shrink mr-2" contain src="/images/umg.png" transition="scale-transition"
            width="40" />
        </div>
        <v-spacer></v-spacer>
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
          <v-icon>mdi-package</v-icon>
          <span class="ml-2">Productos</span>
        </v-btn>

        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
          <v-icon>mdi-calculator</v-icon>
          <span class="ml-2">Contabilidad</span>
        </v-btn>
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
          <v-icon>mdi-cash</v-icon>
          <span class="ml-2">Tesorería</span>
        </v-btn>
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
          <v-icon>mdi-cart</v-icon>
          <span class="ml-2">Venta</span>
        </v-btn>
      </v-card>
    </v-app-bar>

    <v-main style="background-color: #f2f2f2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
