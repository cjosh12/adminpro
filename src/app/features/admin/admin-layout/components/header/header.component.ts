import { Component, inject, signal } from '@angular/core';
import { AuthService } from '@features/public';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public faBars = signal(faBars);
  public faSun = signal(faSun);
  public faMoon = signal(faMoon);

  private authService = inject(AuthService);

  public onLogout():void{
    this.authService.logout();
  }
}
