<template>
  <div>
    <Contador tit="CONT1" :num="15" :mostrar="true"/>
    <Contador tit="CONT2" v-bind:num="4+4" :mostrar="false"/>
  </div>
</template>

<script>
import Contador from "../components/Contador.vue";
export default {
  components: {
    Contador,
  },
};
</script>

<style>
</style>