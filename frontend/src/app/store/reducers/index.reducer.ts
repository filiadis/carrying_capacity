import { createReducer, on } from '@ngrx/store';
import { appendIndex } from '../actions/index.actions';

const initialState: string[][] = [];

export const indexReducer = createReducer(
  initialState,
  on(appendIndex, (state, { item }) => [...state, item])
);
