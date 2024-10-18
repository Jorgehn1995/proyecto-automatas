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
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Vencimiento</th>
                                <th>Existencias</th>
                                <th>Verificado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="isLoading && !items.length == 0">
                                <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
                                <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
                                <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
                                <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
                                <td><v-skeleton-loader type="text"></v-skeleton-loader></td>
                            </tr>
                            <tr v-else-if="items.length == 0">
                                <td colspan="5" class="text-center">
                                    No hay registros para mostrar
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
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
            this.isLoading = true;
            try {
                const result = await this.$api.get("/productos");
                this.items = results.data;
            } catch (error) {
                console.log(error);
            }
            this.isLoading = false;
        }
    }
}
</script>

<style></style>