import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import { EyeBtnService } from '@core/services';

@Component({
  selector: 'shared-eye-btn',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './eye-btn.component.html'
})
export class EyeBtnComponent {
  private eyeBtnService = inject(EyeBtnService);

  public showEye = computed<boolean>(this.eyeBtnService.showEye);

  public faEye = signal<IconDefinition>(faEye);
  public faEyeSlash = signal<IconDefinition>(faEyeSlash);

  public changeToggle() {
    this.eyeBtnService.toggleEye();
  }
}
