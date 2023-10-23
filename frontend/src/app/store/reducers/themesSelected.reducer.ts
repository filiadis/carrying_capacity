import { createReducer, on } from '@ngrx/store';
import {
  addThemeSelectedItem,
  removeThemeSelectedItem,
} from '../actions/themesSelected.actions';

const initialState: string[] = [
  'Πληθυσμός',
  'Δόμηση και Αστικοποιημένη Επιφάνεια',
  'Κρίσιμες Υποδομές / Υποδομές Ζωτικής Σημασίας (ΕΥΖΣ)',
  'Τοπική Κοινωνία και Οικονομία',
  'Τουρισμός',
  'Φυσικό Περιβάλλον, τοπίο και Πολιτισμός',
];

//const initialState: string[] = [];

export const selectedThemesReducer = createReducer(
  initialState,

  on(addThemeSelectedItem, (state, { item }) => {
    return [...state, item];
  }),
  on(removeThemeSelectedItem, (state, { item }) => {
    return state.filter((i) => i !== item);
  })
);
