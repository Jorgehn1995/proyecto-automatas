<template>
    <div>
        <v-btn color="red" depressed class="rounded-lg" @click="open" dark>
            <v-icon>mdi-delete</v-icon>
        </v-btn>

        <v-dialog v-model="isOpen" max-width="500">
            <v-card outlined elevation="0" class="rounded-xl">
                <v-card-title class="headline">Eliminar Producto</v-card-title>
                <v-card-text>
                    ¿Estás seguro de que deseas eliminar el producto <strong>{{ producto.nombre }}</strong>? Esta acción
                    no se puede deshacer.
                </v-card-text>
                <v-card-actions>
                    <v-btn text @click="close">
                        Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="red" depressed @click="eliminarProducto" :loading="isLoading" dark>
                        Eliminar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "producto-eliminar",
    props: {
        productoId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
            isLoading: false,
            producto: {
                nombre: "",
            },
        };
    },
    methods: {
        open() {
            this.isOpen = true;
            this.cargarProducto(); // Cargar datos del producto antes de eliminarlo
        },
        close() {
            this.isOpen = false;
        },
        async cargarProducto() {
            this.isLoading = true;
            try {
                // Obtener los datos del producto para mostrar su nombre en la confirmación
                const result = await this.$api.get(`/productos/${this.productoId}`);
                this.producto = result.data;

            } catch (error) {
                console.error("Error cargando producto", error);
            }
            this.isLoading = false;
        },
        async eliminarProducto() {
            this.isLoading = true;
            try {
                // Eliminar el producto enviando una solicitud DELETE
                await this.$api.delete(`/productos/${this.productoId}`);
                this.$emit("success"); // Emitir un evento para notificar la eliminación
                this.close(); // Cerrar el diálogo después de eliminar el producto
            } catch (error) {
                console.error("Error eliminando producto", error);
            }
            this.isLoading = false;
        },
    },
};
</script>

<style scoped>
.v-btn {
    border-radius: 8px;
    padding-left: 16px !important;
    padding-right: 16px !important;
}
</style>
