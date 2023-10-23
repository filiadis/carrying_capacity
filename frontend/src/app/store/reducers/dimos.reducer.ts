import { createReducer, on } from '@ngrx/store';
import { setDimos } from '../actions/dimos.actions';

const initialState = 'ΜΑΝΤΟΥΔΙΟΥ - ΛΙΜΝΗΣ - ΑΓΙΑΣ ΑΝΝΑΣ';

//const initialState = '';

export const dimosReducer = createReducer(
  initialState,
  on(setDimos, (state, { value }) => value)
);
