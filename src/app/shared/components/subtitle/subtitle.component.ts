import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-subtitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtitle.component.html',
})
export class SubtitleComponent {
  @Input()
  public styleClass = '';
}
