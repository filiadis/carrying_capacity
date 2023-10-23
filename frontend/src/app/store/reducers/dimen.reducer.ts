import { createReducer, on } from '@ngrx/store';
import { setDimen } from '../actions/dimen.actions';

const initialState: string[] = ['ΕΛΥΜΝΙΩΝ', 'ΚΗΡΕΩΣ', 'ΝΗΛΕΩΣ'];

//const initialState: string[] = [];

export const dimenReducer = createReducer(
  initialState,
  on(setDimen, (state, { value }) => value)
);
