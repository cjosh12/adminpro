import { Component, DestroyRef, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@features/public';
import { ProfileService } from '../../services/profile.service';
import { ToastService } from '@core/services';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { faCheckCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'admin-profile-form',
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  public profileForm!: FormGroup;
  public firstNameLabel = 'Nombres';
  public lastNameLabel = 'Apellidos';
  public emailLabel = 'email';

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private profileService = inject(ProfileService);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  public user = computed(() => this.authService.CurrentUser());

  constructor() {
    this.buildForm();
  }

  public onSave() {
    if (this.profileForm.valid) {
      this.profileService
        .editProfile(this.profileForm.value, this.user()!.user_id)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: ({ reply, message }) =>
            this.toastService.show({
              color: 'success',
              message,
              icon: faCheckCircle,
              duration: 4000,
            }),
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

  private buildForm() {
    this.profileForm = this.fb.group({
      first_name: [
        this.user()!.first_name,
        [Validators.required, Validators.minLength(2)],
      ],
      last_name: [
        this.user()!.last_name,
        [Validators.required, Validators.minLength(2)],
      ],
      email: [this.user()!.email, [Validators.required, Validators.email]],
    });
  }
}