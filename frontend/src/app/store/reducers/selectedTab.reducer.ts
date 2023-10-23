import { createReducer, on } from '@ngrx/store';
import { setSelectedTab } from '../actions/selectedTab.actions';

const initialState: string = '';

export const selectedTabReducer = createReducer(
  initialState,
  on(setSelectedTab, (state, { value }) => value)
);
