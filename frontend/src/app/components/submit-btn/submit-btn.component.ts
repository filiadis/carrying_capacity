import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, first, takeUntil } from 'rxjs';
import { setResults } from 'src/app/store/actions/results.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.css'],
})
export class SubmitBtnComponent {
  private destroy$ = new Subject<void>();
  index$: Observable<string[]>;
  results$: Observable<string[]>;

  isLoading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<{
      index: string[];
      results: string[];
    }>
  ) {
    this.index$ = store.select('index');
    this.results$ = store.select('results');
  }
  onBtnClick() {
    this.index$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      const payload = JSON.stringify(data);
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.isLoading = true;

      this.http
        .post(`${environment.apiUrl}api/result/`, payload, {
          headers: httpHeaders,
        })
        .subscribe({
          next: (response: any) => {
            this.store.dispatch(setResults({ item: response }));
            this.router.navigate(['results']);
            this.isLoading = false;
          },
          error: (error: any) => {
            console.error(error);
            this.isLoading = false;
          },
        });
    });

    this.results$.subscribe((data) => {
      console.log(data);
    });
    this.results$.subscribe((data) => {
      console.log(data[0]);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
