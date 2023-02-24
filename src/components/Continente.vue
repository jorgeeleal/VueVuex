<script >
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore();

        const filtro = (region) => {
            store.dispatch('filtrarRegion', region);
        }
        
        return{
            filtro
        }
    }
}
</script>

<template>
    <div class="container text-center">
        <p>Filtrar por continente: </p>
        <div class="btn-group mb-3" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-dark" @click="filtro('Americas')">AM</button>
            <button type="button" class="btn btn-outline-dark" @click="filtro('Europe')">EU</button>
            <button type="button" class="btn btn-outline-dark" @click="filtro('Asia')">AS</button>
            <button type="button" class="btn btn-outline-dark" @click="filtro('Oceania')">OC</button>
            <button type="button" class="btn btn-outline-dark" @click="filtro('Africa')">AF</button>
            <button type="button" class="btn btn-outline-dark" @click="filtro('')">ALL</button>
        </div>
    </div>
</template>