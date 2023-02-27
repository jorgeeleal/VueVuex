<script>
import CardList from '../components/CardList.vue'
import Continente from '../components/Continente.vue';
import Formulario from '../components/Formulario.vue'
  export default{
    components: {
    CardList,
    Continente,
    Formulario
    }
  }

</script>

<template>
  <div class="container">
    <h1>Paises</h1>
    <Continente />
    <Formulario />
    <CardList />
  </div>
  
</template>
