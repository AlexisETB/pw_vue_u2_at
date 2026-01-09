<template>
  <div>
    <Pokemonimagen v-if="mostrar" :pokemonId="pokemonGanador"/>
    <Pokemonopciones @seleccionado="evaluarGanador($event)" :listaPokemon="pokeArray"/>
    <p>{{ message }}</p>
    <button @click="destruirComponente">Destruir</button>
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
      message: null,
      mostrar : true
    }
  },
  /* Crea el componente*/
  beforeCreate(){
    console.log("Before: apenas inicia la instancia del componenete");
  },
  created(){
    console.log("Created: cuando se han ejecutado data, computed, methods y watch");
  },
  /*Montaje del compoenente: cuando se renderiza y vizualiza el componente*/
  beforeMount(){
    console.log("Before Mount: antes de renderizar el componente");
  },
  mounted(){
    console.log("Mounted: el componente ya se renderizo y se puede vizualizar");
    this.iniciarJUego();
  },
  /* Actualizacion de un componente*/
  beforeUpdate(){
    console.log("Before Update: antes de actualizar el componente, es decir cuando se cambio algun dato reactivo o props antes del ernderizado ");
  },
  updated(){
    console.log("Updated: el componente se actualizo, es decir cuando se cambio algun dato reactivo o props despues de la re-renderizacion");
  },
  /* Desmontaje de un componente: cuando se elimina el componente del DOM */
  beforeUnmount(){
    console.log("Before Unmount: antes de eliminar el componente del DOM");
  },
  unmounted(){
    console.log("Unmounted: el componente ha sido eliminado del DOM");
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
    },
    destruirComponente(){
      this.mostrar = false;
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