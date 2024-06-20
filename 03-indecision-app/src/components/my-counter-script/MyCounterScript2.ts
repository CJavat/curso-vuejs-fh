import { defineComponent, ref, computed } from "vue";
import { useCounters } from "@/composables/useCounters";

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup( props ) {
    const { counter, squareCounter } = useCounters( props.value );
    // const counter = ref( props.value );
    // const squareCounter = computed( () => counter.value * counter.value );

    return {
      counter,
      squareCounter,
    }
  }
});