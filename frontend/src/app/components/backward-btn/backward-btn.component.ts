import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-backward-btn',
  templateUrl: './backward-btn.component.html',
  styleUrls: ['./backward-btn.component.css'],
})
export class BackwardBtnComponent {
  @Output() btnClick = new EventEmitter<void>();

  onBtnClick() {
    this.btnClick.emit();
  }
}
