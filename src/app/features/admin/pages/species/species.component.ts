import { Component, OnInit, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Species } from '@features/admin/models';
import { SpeciesService } from '@features/admin/services';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'admin-species',
  templateUrl: './species.component.html',
  styles: []
})
export class SpeciesComponent implements OnInit {
  private speciesService = inject(SpeciesService);
  private toastService = inject(ToastService);
  public species = signal<Species[]>([]);

  ngOnInit(): void {
    this.getSpecies();
  }
  private getSpecies() {
    this.speciesService.getSpecies().subscribe({
      next: ({statusCode, reply, message}) => {
        if (statusCode === 200){ 
        this.species.set(reply);
      }else{
        this.toastService.show({
          color: 'error',
          message,
          icon: faCircleXmark,
          duration: 3000,
        });
      } 
      },
      error: (error) => {
        this.toastService.show({
          color: 'error',
          message: error,
          icon: faCircleXmark,
          duration: 4000,
        });
      },
    });
  }
}
