<template>
  <div>
    <!--<ContadorView />-->
    <!--<DirectivasView />-->
    <PreguntaView />
  </div>
</template>

<script>
import ContadorView from "../src/views/ContadorView.vue";
import DirectivasView from "../src/views/DirectivasView.vue";
import PreguntaView from "./views/PreguntaView.vue";
export default {
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView
  },
};
</script>

<style>
</style>