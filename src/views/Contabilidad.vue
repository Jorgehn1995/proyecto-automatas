<template>
    <div>
        <v-container>
            <div>
                <contabilidad-listar></contabilidad-listar>
            </div>
        </v-container>
    </div>
</template>

<script>
import ContabilidadListar from '../components/contabilidad/contabilidad-listar.vue'



export default {
    components: { ContabilidadListar },
    name: 'Contabilidad',
}
</script>
