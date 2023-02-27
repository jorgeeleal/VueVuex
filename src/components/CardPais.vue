<script>
export default{
    props: ['pais'],
    setup(){
        const formatoNumero = (num) => {
            return new Intl.NumberFormat("de-DE").format(num);
        }

        return{
            formatoNumero
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card-body" v-if="pais">
            <div class="card-title">{{ pais.name.common }}</div>  
            <p class="card-text">
                <h1><span class="badge text-bg-light mb-1">{{ pais.flag }}</span></h1>
                <span class="badge text-bg-light mb-1">{{ formatoNumero(pais.population) }}</span>
                <br>
                <span v-if="pais.capital" class="badge text-bg-dark mb-1">{{ pais.capital[0] }}</span>
                <span class="badge text-bg-light mb-1">{{ pais.region }}</span>
            </p>
        </div>
    </div>
</template>