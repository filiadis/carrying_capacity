import { createAction, props } from '@ngrx/store';

export const setDimos = createAction('[dimos] set', props<{ value: string }>());
