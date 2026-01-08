<template>
  <div>
    <Pokemonimagen :pokemonId="1"/>
    <Pokemonopciones />
    
  </div>
</template>

<script>
import Pokemonopciones from '@/components/Pokemonopciones.vue';
import Pokemonimagen from '@/components/Pokemonimagen.vue';
export default {
    components: {
    Pokemonopciones,
    Pokemonimagen
  }
}
</script>

<style>

</style>