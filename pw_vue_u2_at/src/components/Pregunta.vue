<template>
  <div>
    <img v-if="imagen" :src="imagen" alt="No se puede ver la imagen"/>
    <div class="oscuro"></div>
    <div class="Pregunta-Container">
        <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
        <p>Recuerda terminar la pregunta con el signo de interrogacion (?)</p>
        <h2>{{pregunta}}</h2>
        <h1>{{respuesta}}</h1>
    </div>
  </div>
</template>

<script>
import {consumirAPIFacade} from "../clients/YesnoClient.js";
export default {
    data(){
        return{
            pregunta: null,
            respuesta: null,
            imagen: null,
        };
    },
    watch:{
        pregunta(value, oldValue){

            if(value.includes('?')){
                this.consumir();
            }
        },
    },
    methods:{
        async consumir(){
        const resp = await consumirAPIFacade();
        console.log('Respuesta de la API: ');
        console.log(resp);
        console.log(resp.answer);
        this.respuesta = resp.answer;
        this.imagen = resp.image;
        }
    },
}
</script>

<style scoped>
img, .oscuro {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
}
.oscuro{
    background-color: rgba(0, 0, 0, 0.4);
}
.Pregunta-Container{
    position: relative;
    color: white;
    
    min-height: 100vh; /* altura de toda la pantalla */
    display: flex;
    flex-direction: column; /* elementos uno debajo del otro */
    justify-content: center; /* centrado vertical */
    align-items: center; /* centrado horizontal */
    text-align: center;
}
input{
    width: 500px;
    height: 20px;
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-size: 18px;
}
input:focus{
    outline: none;
}

p{
    font-size: 20px;
}
h2{
    font-size: 40px;
    margin-top: 30px;
}
h1{
    font-size: 80px;
    margin-top: 20px;
}
</style>