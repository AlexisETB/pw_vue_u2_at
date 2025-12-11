<template>
  <div>
    <img src="https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif" alt="No se puede ver la imagen"/>
    <div class="Pregunta-Container">
        <input type="text" placeholder="Hazme una pregunta">
        <p>Recuerda terminar la pregunta con el signo de interrogacion (?)</p>
        <h2>Sere millonario?</h2>
        <h1>SI, NO</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
img {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
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