import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  version: string = '0.0.1';

  constructor() {}

  getVersion(): string {
    return this.version;
  }
}
