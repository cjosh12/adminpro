import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@features/public';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public user = computed(()=>this.authService.CurrentUser());

  onLogout():void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
