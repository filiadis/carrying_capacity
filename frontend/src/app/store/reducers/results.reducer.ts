import { createReducer, on } from '@ngrx/store';
import { setResults } from '../actions/results.actions';
import { Results } from '../models/resultsModel';

const initialState: Results = {};

export const resultsReducer = createReducer(
  initialState,
  on(setResults, (state, { item }) => ({ ...state, ...item }))
);
