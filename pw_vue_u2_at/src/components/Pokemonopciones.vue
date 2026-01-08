<template>
  <div class="opciones-container">
    <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {

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