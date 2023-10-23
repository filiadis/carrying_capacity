import { createAction, props } from '@ngrx/store';

export const setSelectedTab = createAction(
  '[selected tab] set',
  props<{ value: string }>()
);
