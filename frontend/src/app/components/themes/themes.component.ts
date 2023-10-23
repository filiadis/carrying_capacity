import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  addDimenSelectedItem,
  removeDimenSelectedItem,
} from 'src/app/store/actions/dimenSelected.actions';
import {} from 'src/app/store/actions/themes.actions';
import {
  addThemeSelectedItem,
  removeThemeSelectedItem,
} from 'src/app/store/actions/themesSelected.actions';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  dimen$: Observable<string[]>;
  dimenSelected$: Observable<string[]>;
  themes$: Observable<string[]>;
  themesSelected$: Observable<string[]>;

  constructor(
    private store: Store<{
      dimen: string[];
      dimenSelected: string[];
      themes: string[];
      themesSelected: string[];
    }>
  ) {
    this.dimen$ = store.select('dimen');
    this.dimenSelected$ = store.select('dimenSelected');
    this.themes$ = store.select('themes');
    this.themesSelected$ = store.select('themesSelected');
  }

  ngOnInit() {}

  dimenValue(event: MatCheckboxChange, item: string): void {
    if (event.checked) {
      this.store.dispatch(addDimenSelectedItem({ item }));
    } else {
      this.store.dispatch(removeDimenSelectedItem({ item }));
    }
  }

  themeValue(event: MatCheckboxChange, item: string): void {
    if (event.checked) {
      this.store.dispatch(addThemeSelectedItem({ item }));
    } else {
      this.store.dispatch(removeThemeSelectedItem({ item }));
    }
  }
}
