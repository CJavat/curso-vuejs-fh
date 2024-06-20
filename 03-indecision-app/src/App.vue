<template>
  <h1>Mi Primera App</h1>
  <h1 className="text-5xl font-bold underline text-red-500">
      Hello world!
  </h1>
  <hr>

  
  <MyCounter v-bind:value="1" text="Hola Mundo" /> <!-- Forma para pasar las properties a los componentes hijos -->
  <MyCounterScript :value="25" text="Hello Friend" /> <!-- Es la forma corta (abreviada) del v-bind: -->
  <MyCounterScript2 :value="55" text="Hello Friend" /> <!-- Es la forma corta (abreviada) del v-bind: -->
</template>

<script lang="ts" setup>
  import MyCounter from './components/MyCounter.vue';
  import MyCounterScript from './components/MyCounterScript.vue';
  import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<!-- SCOPED Hace que el estilo solo se aplique a éste componente -->
<!-- <style scoped>
h1 {
  color: green;
}
</style> -->
