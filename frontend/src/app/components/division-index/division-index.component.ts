import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appendIndex } from 'src/app/store/actions/index.actions';

@Component({
  selector: 'app-division-index',
  templateUrl: './division-index.component.html',
  styleUrls: ['./division-index.component.css'],
})
export class DivisionIndexComponent {
  @Input() identifier: string = '';
  @Input() deiktis: string = '';
  @Input() onomastis: string = '';
  @Input() paronomastis: string = '';
  @Input() oria: string = '';

  selectedtab$: Observable<string>;
  index$: Observable<string[]>;

  onomastisValue: number | undefined;
  paronomastisValue: number | undefined;

  deiktisValue: number | undefined;

  weightValue: string | undefined;

  saveSuccess: boolean = false;

  btnDisabled = true;

  weights = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
  ];

  constructor(
    public dialog: MatDialog,

    private snackBar: MatSnackBar,
    private store: Store<{
      selectedTab: string;
      index: string[];
    }>
  ) {
    this.selectedtab$ = store.select('selectedTab');
    this.index$ = store.select('index');
  }

  ngOnInit(): void {}

  save() {
    if (this.btnDisabled) {
      this.btnDisabled = false;
      return;
    }

    if (
      this.onomastisValue === undefined ||
      this.onomastisValue === null ||
      this.paronomastisValue === undefined ||
      this.paronomastisValue === null ||
      this.weightValue === undefined ||
      this.weightValue === null
    ) {
      this.openFailureSnackBar();
      this.saveSuccess = false;
      this.btnDisabled = false;
    } else {
      let selectedTab = '';

      let identifier = this.identifier;

      this.deiktisValue = this.onomastisValue / this.paronomastisValue;

      let deiktis = String(this.deiktisValue); // Convert to string
      let weight = String(this.weightValue); // Convert to string

      this.store.pipe(select((state) => state.selectedTab)).subscribe((tab) => {
        selectedTab = tab;
      });

      let info = [selectedTab, identifier, deiktis, weight];

      this.store.dispatch(appendIndex({ item: info }));

      this.index$.subscribe((data) => {
        console.log(data);
      });

      this.btnDisabled = true;
      this.openSuccessSnackBar();
      this.saveSuccess = true;
    }
  }

  // Snackbar that opens with success background
  openSuccessSnackBar() {
    this.snackBar.open('Επιτυχής καταχώριση', 'OK', {
      duration: 3000,
      panelClass: ['blue_snackbar'],
    });
  }
  //Snackbar that opens with failure background
  openFailureSnackBar() {
    this.snackBar.open('Συμπληρώστε όλα τα πεδία', 'Προσπαθήστε ξανά', {
      duration: 3000,
      panelClass: ['red_snackbar'],
    });
  }
}
