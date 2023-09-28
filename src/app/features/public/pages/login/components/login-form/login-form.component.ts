import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import { EyeBtnService, ToastService } from '@core/services';
import { AuthService } from '@features/public';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private eyeBtnService = inject(EyeBtnService);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  public showPassword = this.eyeBtnService.showEye;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public onLogin(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => this.router.navigateByUrl('/dashboard'),
          error: (message) => {
            console.log(message);
            this.toastService.show({
              color: 'error',
              message,
              icon: faCircleXmark,
              duration: 4000,
            });
          },
        });
    }
  }
}