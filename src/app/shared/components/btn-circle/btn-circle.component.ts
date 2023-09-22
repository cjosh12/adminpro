import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-circle-btn',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './btn-circle.component.html'
})
export class BtnCircleComponent {
  public faX = signal<IconDefinition>(faX);
}