<!--  html del componente -->
 <template>
  <div>
    <h1>{{ tit }}</h1>
    <p>{{ numero }}<sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup> = {{ calculaCubo }}</p>
    <p>{{ numero }}<sup>2</sup> = {{ obtenerCubo() }}</p>
    <div>
      <button @:click="incrementar()">+1</button>
      <button v-on:click="decrementar()">-1</button>
      <button v-show="mostrar">prueba</button>
    </div>
  </div>
</template>

<script>
// lógica del componente
export default {
  // declaracion de option api
  data(){ //declaracion de propiedades reactivas
    return {
      numero: this.num,
      titulo: "Contador Vue",
    };
  },
  methods: {
    // declaracion de metodos
    obtenerCuadrado(){
      console.log("Calculando el cuadrado...");
      return this.numero * this.numero;
    },
    obtenerCubo(){
      console.log("Calculando el cubo...");
      return this.numero * this.numero * this.numero;
    },
    incrementar(){
      console.log(this.tit);
      this.numero++;
    },
    decrementar(){
      this.numero--;
    },
  },
  computed: {
    // declaracion de propiedades computadas
    calculaCuadrado(){
      console.log("Entro a propiedad computada");
      return this.numero * this.numero;
    },
    calculaCubo(){
      console.log("Entro a propiedad computada Cubo");
      return this.numero * this.numero * this.numero;
    },
  },
  // props:[
  //   // declaracion de propiedades para instanciar desde el componente padre externo
  //   "tit",
  //   "num",
  //   "mostrar"
  //   //declaracion basica
    
  // ]
  props: {
    tit:String,
    num: {
      type: Number,
      default: 99,
      validator(value){
        return value > 10;
      }
    },
    mostrar:Boolean

    //String, Number, Array, Object, Date, Function, Boolean, BigInt
  }
};
</script>

<style>
/* estilos del css del componente */
</style>