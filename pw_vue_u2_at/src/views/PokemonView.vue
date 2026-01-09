<template>
  <div>
    <Pokemonimagen :pokemonId="pokemonGanador"/>
    <Pokemonopciones @seleccionado="evaluarGanador($event)" :listaPokemon="pokeArray"/>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Pokemonopciones from '@/components/Pokemonopciones.vue';
import Pokemonimagen from '@/components/Pokemonimagen.vue';
import {consumirApiFacade, obtenerAleatorioFacade} from '@/clients/PokemonClient.js';
export default {
    components: {
    Pokemonopciones,
    Pokemonimagen
    
  },
  data() {
    return {
      pokeArray: [],
      pokemonGanador: null,
      message: null
    }
  },
  mounted(){
    console.log("Mounted");
    this.iniciarJUego();
  },
  methods: {
    async iniciarJUego(){
      this.pokeArray = await consumirApiFacade();
      console.log(this.pokeArray);

      const idAleatorio = obtenerAleatorioFacade(0, 3);
      this.pokemonGanador = this.pokeArray[idAleatorio].id;
      console.log(this.pokemonGanador);

      this.message = null;
    },
    evaluarGanador(idGanador){
      if(idGanador === this.pokemonGanador){
        console.log("¡Has ganado!");
        this.message = "¡Has seleccionado el correcto!";
      } else {
        console.log("¡Has perdido!");
        this.message = "¡Has seleccionado el incorrecto!";
      }
    }
  }
}
</script>

<style>
p{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
    
}
</style>