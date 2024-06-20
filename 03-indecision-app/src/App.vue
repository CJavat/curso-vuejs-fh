<template>
  <h1>Hola Mundo</h1>
</template>

<!-- SETUP es para decirle de forma corta al script que todo es como si lo inicializaras a la fn SETUP() -->
<script lang="ts" setup>
console.log('Hola Mundo');
</script>

<!-- SCOPED Hace que el estilo solo se aplique a éste componente -->
<style scoped>
h1 {
  color: green;
}
</style>
