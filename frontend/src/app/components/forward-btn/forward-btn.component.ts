import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-forward-btn',
  templateUrl: './forward-btn.component.html',
  styleUrls: ['./forward-btn.component.css'],
})
export class ForwardBtnComponent {
  @Input() isDisabled: boolean = true;
  @Output() btnClick = new EventEmitter<void>();

  onBtnClick() {
    this.btnClick.emit();
  }
}
