import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Color } from '@core/enum';

@Component({
  selector: 'shared-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input()
  public type: 'button' | 'submit' | 'reset' = 'button';
  @Input()
  public color: Color = Color.PRIMARY;
  @Input()
  public outline = false;
  @Input()
  public btnDisabled = false;

  get colors() {
    return {
      [`btn-${this.color}`]: true,
      'btn-outline': this.outline,
      'btn-disabled': this.btnDisabled,
    };
  }
}
