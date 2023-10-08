import {create} from 'zustand';

export interface CounterStore {
  counter: number;
  setCounter: (counter: number) => void;
}

export const useCounterStore = create<CounterStore>(set => {
  return {
    counter: 0,
    setCounter: counter => set({counter}),
  };
});
