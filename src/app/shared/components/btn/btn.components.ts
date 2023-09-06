import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COLOR } from '@core/dictionary';

type color = typeof COLOR[keyof typeof COLOR];

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
  public color: color = COLOR.PRIMARY;

  get colors() {
    return {
      'btn-primary': this.color === 'primary',
      'btn-secondary': this.color === 'secondary',
      'btn-neutral': this.color === 'neutral',
      'btn-accent': this.color === 'accent',
      'btn-ghost': this.color === 'ghost',
      'btn-success': this.color === 'success',
      'btn-warning': this.color === 'warning',
      'btn-error': this.color === 'error',
      'btn-info': this.color === 'info',
      'btn-link': this.color === 'link',
    }
  }
}