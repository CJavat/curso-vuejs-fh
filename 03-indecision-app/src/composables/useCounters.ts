import { ref, computed } from "vue";

export const useCounters = ( initialValue: number = 5 ) => {

  const counter = ref( initialValue );
  // const squareCounter = computed( () => counter.value * counter.value );

  return {
    counter,

    // Read Only
    squareCounter: computed( () => counter.value * counter.value ),
  }
}
