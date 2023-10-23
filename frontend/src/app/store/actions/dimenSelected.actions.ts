import { createAction, props } from '@ngrx/store';

export const initDimenSelected = createAction('[dimenSelected] init');

export const setDimenSelected = createAction(
  '[dimenSelected] set',
  props<{ value: string[] }>()
);

export const getDimenSelected = createAction(
  '[dimenSelected] get',
  props<{ value: string[] }>()
);

export const addDimenSelectedItem = createAction(
  '[dimenSelected] add item',
  props<{ item: string }>()
);

export const removeDimenSelectedItem = createAction(
  '[dimenSelected] remove item',
  props<{ item: string }>()
);
