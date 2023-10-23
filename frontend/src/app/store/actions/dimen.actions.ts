import { createAction, props } from '@ngrx/store';

export const setDimen = createAction(
  '[dimen] set',
  props<{ value: string[] }>()
);
