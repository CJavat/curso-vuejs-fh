
<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script src="./MyCounterScript2"></script>

<style scoped>
  .btn {
    @apply p-5 bg-green-500 rounded mr-2 hover:bg-green-700 w-24 text-center;
  }
</style>