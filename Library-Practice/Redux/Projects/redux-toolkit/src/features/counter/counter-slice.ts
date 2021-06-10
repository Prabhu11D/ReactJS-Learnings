// Ducks Pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // immer.js make it immutable under the hood
    incremented(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented } = counterSlice.actions;

export default counterSlice.reducer;
