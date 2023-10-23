import { createAction, props } from '@ngrx/store';

export const setThemes = createAction(
  '[themes] set',
  props<{ value: string[] }>()
);
