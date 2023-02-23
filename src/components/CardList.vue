<script>    
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardPais from './CardPais.vue';
export default {
    components: { 
            CardPais 
        },
    setup() {
        const store = useStore();
        const paises = computed(() => {
            //return store.state.paises
            return store.getters.topPaisesPoblacion;
        });
        onMounted(() => {
            store.dispatch("getPaises");
        });
        return {
            paises
        };
    }
}

</script>

<template>
    <div class="row" v-if="paises">
        <div class="col-12" v-for="pais in paises">
            <!-- {{pais.name.common}} &nbsp;&nbsp;&nbsp;&nbsp; | -- Población:  {{ pais.population }} -->
            <CardPais :pais="pais" />
        </div>
    </div>
</template>