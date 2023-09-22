import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonColor, Size } from '@core/models';

@Component({
  selector: 'shared-circle-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-circle.component.html'
})
export class BtnCircleComponent {
  @Input()
  public color: ButtonColor = 'primary';
  @Input()
  public outline = false;
  @Input()
  public size:Size = 'md';

  get styles() {
    return {
      [`btn-${this.color}`]: true,
      [`btn-${this.size}`]: true,
      'btn-outline': this.outline,
    };
  }
}