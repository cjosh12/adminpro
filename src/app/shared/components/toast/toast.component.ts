import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';

import { ToastService } from '@core/services';
import { BtnCircleComponent } from '../btn-circle';
import { ALERT_COLORS } from '@core/models';

@Component({
  selector: 'shared-toast',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, BtnCircleComponent],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  private toastService = inject(ToastService);

  public toastData = computed(() => this.toastService.toastData());
  public faX = signal<IconDefinition>(faX);

  private mapColors = ALERT_COLORS;

  public isToastVisible = computed<boolean>(() => {
    if (this.toastService.toastData()) return true;

    return false;
  });

  hideToast(): void {
    this.toastService.hide();
  }

  get styles() {
    const colors = this.mapColors[this.toastService.toastData()!.color]
    if (colors) {
      return colors
    };
    return {}
  }
}