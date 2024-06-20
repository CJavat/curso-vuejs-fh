
<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>

    <div>
      <button class="btn" @click="increaseByOne">+1</button>
      <button class="btn" @click="decreaseByOne">-1</button>
    </div>
  </section>
</template>

<!-- SETUP es para decirle de forma corta al script que todo es como si lo inicializaras a la fn SETUP() -->
<script lang="ts" setup>
  import { useCounters } from '../composables/useCounters';

  interface Props {
    value: number;
    text: string;
  }

  const props = defineProps<Props>();

  const { counter, squareCounter } = useCounters( 10 );

  // import { ref, computed } from "vue";

  

  //? Forma tradicional de definir unas props
  // const props = defineProps({
  //   value: { type: Number, required: true },
  // });
  
  //? Forma generica de definir las props 
  // const props = defineProps<Props>();



  // const counter = ref( props.value );
  // const squareCounter = computed( () => counter.value * counter.value );

  const increaseByOne = () => {
    counter.value += 1;
  }

  const decreaseByOne = () => {
    counter.value -= 1;
  }
</script>


<style scoped>
  .btn {
    @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700 w-24 text-center;
  }
</style>