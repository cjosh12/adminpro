import { Component, signal } from '@angular/core';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  public faX = signal<IconDefinition>(faX);
}
