import { createAction, props } from '@ngrx/store';
import { Results } from '../models/resultsModel';

export const setResults = createAction(
  '[results] append',
  props<{ item: Results }>()
);
