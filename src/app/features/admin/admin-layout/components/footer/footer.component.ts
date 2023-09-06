import { Component, signal } from '@angular/core';

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  public year = signal<number>( new Date().getFullYear() )
}
