import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService, EyeBtnService} from '@core/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})

export class LoginFormComponent {
  private eyeBtnService = inject(EyeBtnService);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef)

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public showPassword = computed<boolean>(this.eyeBtnService.showEye);

  public onLogin():void {
    this.authService.sendLogin(this.loginForm.value)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (message) => console.log(message),
    });

  }
}


