import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BTN_COLORS, BTN_SIZE, ButtonColor, Size } from '@core/models';

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

  private mapSizes = BTN_SIZE;
  private mapColors = BTN_COLORS;

  get styles() {
    const sizes = this.mapSizes[this.size];
    const colors = this.mapColors[this.color];
    return {
      ...sizes,
      ...colors,
      'btn-outline': this.outline,
    };
  }
}