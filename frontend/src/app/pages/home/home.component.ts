import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  appVersion: string = '';

  constructor(private router: Router, private version: VersionService) {
    this.appVersion = version.getVersion();
  }

  startProcess() {
    localStorage.clear();
    this.router.navigate(['step1']);
  }
}
