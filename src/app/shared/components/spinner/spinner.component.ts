import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'shared-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  private spinnerService = inject(SpinnerService);

  public finishedSpinnerCheck = computed(()=>{
    return this.spinnerService.isLoading()
  })
}
