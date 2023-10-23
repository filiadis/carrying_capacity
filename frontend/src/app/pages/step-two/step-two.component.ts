import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent implements OnInit {
  dimenSelected$: Observable<string[]>;

  themesSelected$: Observable<string[]>;

  constructor(
    private router: Router,
    private store: Store<{
      dimenSelected: string[];

      themesSelected: string[];
    }>
  ) {
    this.dimenSelected$ = store.select('dimenSelected');
    this.themesSelected$ = store.select('themesSelected');
  }

  ngOnInit(): void {}

  goFront() {
    this.router.navigate(['step3']);
  }

  goBack() {
    this.router.navigate(['step1']);
  }

  areAllUnchecked(): boolean {
    let dimen = 0;
    let theme = 0;
    //Check the length of the array
    this.dimenSelected$
      .pipe(map((value) => value.length))
      .subscribe((length) => {
        dimen = length;
      });
    //Check the length of the array
    this.themesSelected$
      .pipe(map((value) => value.length))
      .subscribe((length) => {
        theme = length;
      });
    //Conditions
    if (dimen == 0 || theme == 0) {
      return true;
    } else {
      return false;
    }
  }
}
