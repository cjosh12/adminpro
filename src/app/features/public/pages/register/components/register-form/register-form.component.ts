import { Component, computed, inject } from '@angular/core';

import { EyeBtnService } from '@core/services';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styles: [
    `
      .login-box {
        right: 0px;
        position: absolute;
        height: 100%;
        width: 400px;
        margin: 0 auto;
      }
    `,
  ],
})
export class RegisterFormComponent {
  private eyeBtnService = inject(EyeBtnService);

  public showPassword = computed<boolean>(this.eyeBtnService.showEye);
}