import { Component, OnInit, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Animals } from '@features/admin/models';
import { AnimalsService } from '@features/admin/services';

import { faCircleXmark, faEllipsis, faPencil, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-animals',
  templateUrl: './animals.component.html',
  styles: []
})
export class AnimalsComponent implements OnInit {
  
  private animalsService = inject(AnimalsService);
  private toastService = inject(ToastService);

  public animals = signal<Animals[]>([]);
  public faEllipsis = signal(faEllipsis);
  public faPencil = signal(faPencil);
  public faSkullCrossbones = signal(faSkullCrossbones);



  ngOnInit(): void {
    this.getAnimals();
  }

  public setAnimal(animal:Animals){
    this.animalsService.setAnimal(animal);
  }

  private getAnimals() {
    this.animalsService.getAnimals().subscribe({
      next: ({statusCode, reply, message}) => {
        if (statusCode === 200){ 
        this.animals.set(reply);
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
