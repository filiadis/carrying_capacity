import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Observable, Subject } from 'rxjs';
import { Results } from 'src/app/store/models/resultsModel';

interface DimeTotalStructure {
  [key: string]: {
    [subKey: string]: string[];
  };
}

interface DimenStateStructure {
  [key: string]:
    | {
        [subKey: string]: string;
      }
    | string;
}

interface DimosTotalStructure {
  [key: string]: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results$: Observable<Results>;

  dimenTotal: any;

  dimenState: any;

  dimosTotal: any;

  dimos$: Observable<string>;

  dimosState: any;

  private onDestroy = new Subject<void>();

  constructor(
    private router: Router,
    private store: Store<{
      results: Results;
      dimos: string;
    }>
  ) {
    this.results$ = store.select('results');
    this.dimos$ = store.select('dimos');
  }

  ngOnInit() {
    //Assign to dimenTotal
    this.results$.subscribe((result) => {
      let rawData = result[0] as unknown as DimeTotalStructure;
      this.dimenTotal = Object.keys(rawData).map((key) => {
        return {
          keyName: key,
          data: Object.keys(rawData[key]).map((subKey) => {
            return {
              key: subKey,
              value: rawData[key][subKey],
            };
          }),
        };
      });
    });

    // Assign to dimenState
    this.results$.subscribe((result) => {
      let rawData = result[1] as unknown as DimenStateStructure;
      this.dimenState = {};
      Object.keys(rawData).forEach((key) => {
        if (typeof rawData[key] === 'string') {
          this.dimenState[key] = rawData[key];
        }
      });
    });

    // Assign to dimosTotal
    this.results$.subscribe((result) => {
      let rawData = result[2] as unknown as DimosTotalStructure;
      this.dimosTotal = Object.keys(rawData).map((key) => {
        return {
          key: key,
          value: rawData[key],
        };
      });
    });

    // Assign to dimosState
    this.results$.subscribe((result) => {
      // Assign to dimosState (safer way)
      const lastKey = Object.keys(result).pop();
      if (lastKey && typeof result[lastKey] === 'string') {
        this.dimosState = result[lastKey];
      }
    });

    // Use this console.log inside the subscription for accurate results.
    console.log(this.dimenState);
  }

  goBack() {
    this.router.navigate(['step3']);
  }

  getRowColor(value: string): string {
    switch (value) {
      case 'ΒΙΩΣΙΜΟ':
        return 'rgb(48, 207, 192)';
      case 'ΣΧΕΤΙΚΑ ΒΙΩΣΙΜΟ':
        return 'rgb(255, 209, 102)';
      case 'ΜΗ ΒΙΩΣΙΜΟ':
        return 'rgb(255, 107, 107)';
      default:
        return 'black'; // default color
    }
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
