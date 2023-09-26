import { Component, DestroyRef, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EyeBtnService, ToastService } from '@core/services';
import { AuthService } from '@features/public/services';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  private eyeBtnService = inject(EyeBtnService);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  public showPassword = computed<boolean>(this.eyeBtnService.showEye);

  public registerForm: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    valid_password: ['', [Validators.required]],
  });

  onRegister(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
    }
  }
  
}