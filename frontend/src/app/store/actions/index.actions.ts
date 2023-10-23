import { createAction, props } from '@ngrx/store';

export const appendIndex = createAction(
  '[index] append',
  props<{ item: string[] }>()
);
