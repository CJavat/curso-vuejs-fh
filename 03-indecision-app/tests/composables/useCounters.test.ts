import { useCounters } from '@/composables/useCounters';

describe('useCounters', () => {
  test('Initializes counter with provided default values', () => {
    const { counter, squareCounter } = useCounters();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(25);
  });

  test('Initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounters(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('Increments counter correctly', () => {
    const { counter, squareCounter } = useCounters();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });
});
