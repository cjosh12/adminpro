import { Injectable, inject } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { ProfileForm } from '@features/admin/models';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiService = inject(ApiService);

  editProfile(profile: ProfileForm, id: string): Observable<MyResponse<ProfileForm>>{
    return this.apiService
    .update<ProfileForm>('users', profile, id)
    .pipe(catchError((error) => throwError(() => error.error.message)));
  }
}
