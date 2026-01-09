<template>
  <div class="opciones-container">
    <ul>
        <li @click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemon" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
 props: {
  listaPokemon: {
   type: Array,
   required: true
  }  
 },
 methods: {
    pasarPadre(id){
        console.log(id);
        this.$emit('seleccionado', id);
    }
 }
}
</script>

<style>
    ul{
        list-style-type: none;
        padding: 0;
    }
    li{
        background-color: white;
        border-radius: 5px;
        border: solid 1px ;
        cursor: pointer;
        width: 250px;
        margin-top: 10px;
    }
    .opciones-container{
        display: flex;
        justify-content: center;
        
    }
</style>