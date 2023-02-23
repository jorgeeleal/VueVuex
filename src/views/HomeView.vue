<script>
import CardList from '../components/CardList.vue'
import Continente from '../components/Continente.vue';
  export default{
    components: {
    CardList,
    Continente
}
  }

</script>

<template>
  <div class="container">
    <h1>Paises</h1>
    <Continente />
    <CardList />
  </div>
  
</template>
