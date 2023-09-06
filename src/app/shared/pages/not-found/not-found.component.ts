import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  public year = signal<number>( new Date().getFullYear() )
}
