import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { setResults } from 'src/app/store/actions/results.actions';
import { setSelectedTab } from 'src/app/store/actions/selectedTab.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent {
  private destroy$ = new Subject<void>();

  dimenSelected$: Observable<string[]>;

  selectedtab$: Observable<string>;

  activeTabIndex: number = 0;

  tabsInfo: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<{
      dimenSelected: string[];

      selectedTab: string;
    }>
  ) {
    this.dimenSelected$ = store.select('dimenSelected');

    this.selectedtab$ = store.select('selectedTab');
  }

  ngOnInit() {
    //initialize the selected tab
    this.dimenSelected$.subscribe((values: string[]) => {
      if (values && values.length > 0) {
        const firstValue = values[0];
        this.store.dispatch(setSelectedTab({ value: firstValue }));
      }
    });

    //initialize the dimen info
    this.getDimenInfo();
  }

  goBack() {
    this.router.navigate(['step2']);
  }

  onTabChanged(event: MatTabChangeEvent) {
    this.store.dispatch(setSelectedTab({ value: event.tab.textLabel }));

    this.activeTabIndex = event.index;
  }

  //get the dimen info
  getDimenInfo() {
    this.dimenSelected$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      const payload = JSON.stringify(data);
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.http
        .post(`${environment.apiUrl}api/dimenInfo/`, payload, {
          headers: httpHeaders,
        })
        .subscribe({
          next: (response: any) => {
            this.tabsInfo = response;
          },
          error: (error: any) => {
            console.error(error);
          },
        });
    });
  }
}
