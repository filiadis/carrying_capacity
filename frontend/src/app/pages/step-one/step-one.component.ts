import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent {
  dimos$: Observable<string>;
  constructor(private router: Router, private store: Store<{ dimos: string }>) {
    this.dimos$ = store.select('dimos');
  }

  goFront() {
    this.router.navigate(['step2']);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
