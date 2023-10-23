import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-btn',
  templateUrl: './reset-btn.component.html',
  styleUrls: ['./reset-btn.component.css'],
})
export class ResetBtnComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('navigateToRoot') === 'true') {
      localStorage.removeItem('navigateToRoot');
      this.router.navigate(['']);
    }
  }

  onBtnClick() {
    localStorage.setItem('navigateToRoot', 'true');
    window.location.reload();
  }
}
