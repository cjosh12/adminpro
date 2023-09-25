import { Component, computed, inject } from '@angular/core';
import { AuthService } from '@features/public';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent {
  private authService = inject(AuthService);

  public user = computed(()=>this.authService.CurrentUser());

  onLogout():void {
    this.authService.logout();

  }
}
