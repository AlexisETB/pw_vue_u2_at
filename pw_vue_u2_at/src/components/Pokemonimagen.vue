<template>
  <div class="pokemon-container">
    <img :src="srcImagen" alt="Imagen Pokemon" />
  </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed:{
        srcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },
    beforeUnmount(){
    console.log("Before Unmount: antes de eliminar el componente del DOM");
  },
  unmounted(){
    console.log("Unmounted: el componente ha sido eliminado del DOM");
  },
}
</script>

<style>
    img{
        position: relative;
        height: 200px;
        left: 45%;
    }
    .pokemon-container{
        height: 200px;
    }


</style>