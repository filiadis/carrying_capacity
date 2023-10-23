import { createAction, props } from '@ngrx/store';

export const addThemeSelectedItem = createAction(
  '[themesSelected] add item',
  props<{ item: string }>()
);

export const removeThemeSelectedItem = createAction(
  '[themesSelected] remove item',
  props<{ item: string }>()
);
