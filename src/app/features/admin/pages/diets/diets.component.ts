import { Component, OnInit, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Diets } from '@features/admin/models';
import { DietsService } from '@features/admin/services';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'admin-diets',
  templateUrl: './diets.component.html',
  styles: [],
})
export class DietsComponent implements OnInit {
  private dietsService = inject(DietsService);
  private toastService = inject(ToastService);
  public diets = signal<Diets[]>([]);

  ngOnInit(): void {
    this.getDiets();
  }
  private getDiets() {
    this.dietsService.getDiets().subscribe({
      next: ({statusCode, reply, message}) => {
        if (statusCode === 200){ 
        this.diets.set(reply);
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
