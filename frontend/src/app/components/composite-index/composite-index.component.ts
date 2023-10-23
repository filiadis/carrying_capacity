import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composite-index',
  templateUrl: './composite-index.component.html',
  styleUrls: ['./composite-index.component.css'],
})
export class CompositeIndexComponent implements OnInit {
  themesSelected$: Observable<string[]>;

  //indexes
  theme_1: boolean = false;
  theme_2: boolean = false;
  theme_3: boolean = false;
  theme_4: boolean = false;
  theme_5: boolean = false;
  theme_6: boolean = false;

  constructor(
    private store: Store<{
      themesSelected: string[];
    }>
  ) {
    this.themesSelected$ = store.select('themesSelected');
  }

  ngOnInit() {
    this.selectedThemes();
  }

  selectedThemes() {
    const themes: string[] = [
      'Πληθυσμός',
      'Δόμηση και Αστικοποιημένη Επιφάνεια',
      'Κρίσιμες Υποδομές / Υποδομές Ζωτικής Σημασίας (ΕΥΖΣ)',
      'Τοπική Κοινωνία και Οικονομία',
      'Τουρισμός',
      'Φυσικό Περιβάλλον, τοπίο και Πολιτισμός',
    ];

    this.themesSelected$.subscribe((selectedThemes: string | string[]) => {
      this.theme_1 = selectedThemes.includes(themes[0]);
      this.theme_2 = selectedThemes.includes(themes[1]);
      this.theme_3 = selectedThemes.includes(themes[2]);
      this.theme_4 = selectedThemes.includes(themes[3]);
      this.theme_5 = selectedThemes.includes(themes[4]);
      this.theme_6 = selectedThemes.includes(themes[5]);
    });
  }
}
