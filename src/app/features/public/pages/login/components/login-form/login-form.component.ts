import { Component, computed, inject, signal } from '@angular/core';

import { EyeBtnService } from '@core/services';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private eyeBtnService = inject(EyeBtnService);

  public showPassword = computed<boolean>(this.eyeBtnService.showEye);
}
