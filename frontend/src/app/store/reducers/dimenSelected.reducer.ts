import { createReducer, on } from '@ngrx/store';

import {
  addDimenSelectedItem,
  removeDimenSelectedItem,
} from '../actions/dimenSelected.actions';

const initialState: string[] = ['ΕΛΥΜΝΙΩΝ', 'ΚΗΡΕΩΣ', 'ΝΗΛΕΩΣ'];

//const initialState: string[] = [];

export const selectedDimenReducer = createReducer(
  initialState,
  on(addDimenSelectedItem, (state, { item }) => {
    return [...state, item];
  }),
  on(removeDimenSelectedItem, (state, { item }) => {
    return state.filter((i) => i !== item);
  })
);
