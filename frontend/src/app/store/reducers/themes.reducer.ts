import { createReducer, on } from '@ngrx/store';
import { setThemes } from '../actions/themes.actions';

const initialState: string[] = [
  'Πληθυσμός',
  'Δόμηση και Αστικοποιημένη Επιφάνεια',
  'Κρίσιμες Υποδομές / Υποδομές Ζωτικής Σημασίας (ΕΥΖΣ)',
  'Τοπική Κοινωνία και Οικονομία',
  'Τουρισμός',
  'Φυσικό Περιβάλλον, τοπίο και Πολιτισμός',
];

export const themesReducer = createReducer(
  initialState,
  on(setThemes, (state, { value }) => value)
);
