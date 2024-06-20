
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

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { useCounters } from '../composables/useCounters';

  export default defineComponent({
    props: {
      value: { type: Number, required: true },
    },
    setup( props ) {
      // const counter = ref( props.value );
      // const squareCounter = computed( () => counter.value * counter.value );

      const { counter, squareCounter } = useCounters( props.value );

      return {
        counter,
        squareCounter,
      }
    }
  });
</script>

<style scoped>
  .btn {
    @apply p-5 bg-red-500 rounded mr-2 hover:bg-red-700 w-24 text-center;
  }
</style>