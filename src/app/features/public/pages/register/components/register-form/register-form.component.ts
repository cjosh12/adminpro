import { Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, EyeBtnService } from '@core/services';

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
  private fb = inject(FormBuilder); 
  private authService = inject(AuthService)

  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });


  public showPassword = computed<boolean>(this.eyeBtnService.showEye);

  public onRegsiter():void {
    this.authService.sendLogin(this.registerForm.value);
  }
}
