import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@core/services';
import { Species } from '@features/admin/models';
import { AnimalsService, SpeciesService } from '@features/admin/services';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'animal-form',
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent {
  private animalsService = inject(AnimalsService);
  private fb = inject(FormBuilder);
  private speciesService = inject(SpeciesService);
  private toastServices = inject(ToastService);
  private destroyRef = inject(DestroyRef);

  public animalForm!: FormGroup;
  public nameLabel = 'Nombre';
  public ageLabel = 'Edad';
  public genderLabel = 'Genero';
  public arrivalLabel = 'Llegada';
  public health_conditionLabel = 'Salud';
  public exhibiy_statusLabel = 'Exhibido'
  public speciesLabel = 'Especie';
  public update_atLabel = 'Fecha de Modificación';
  public species = signal<Species[]>([]);

  public animal = computed(() => this.animalsService.currentAnimal())

  constructor(){
    this.loadSpecies();
  }


  public buildFormEffect = effect(()=>{
    if(this.animal()){
      this.animalForm = this.fb.group({
      name: [this.animal()!.name, [Validators.required]],
      age: [this.animal()!.age,[Validators.required, Validators.min(0)]],
      gender: [this.animal()!.gender, [Validators.required]],
      arrival: [this.animal()!.arrival, [Validators.required]],
      health_condition: [this.animal()!.health_condition,[Validators.required]],
      exhibit_status: [this.animal()!.exhibit_status, [Validators.required]],
      })
    }else{
      this.animalForm  = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', [Validators.required]],
      arrival: ['', [Validators.required]],
      health_condition: ['', [Validators.required]],
      exhibit_status: ['', [Validators.required]],
      species: ['', [Validators.required]],
      updated_at: ['', [Validators.required]],
      })
    }
  })

  public onSave(){
    if (this.animal()) {
      this.animalsService
        .updateAnimal(this.animal()!.animal_id, this.animalForm.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
          next: ({ reply, message }) =>
            this.toastServices.show({
              color: 'success',
              message,
              icon: faCheckCircle,
              duration: 4000,
            }),
          error: (message) => {
            console.log(message);
            this.toastServices.show({
              color: 'error',
              message,
              icon: faCircleXmark,
              duration: 4000,
            });
          },
        });
    } else {
      this.animalsService
        .createAnimal(this.animalForm.value)
        .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
          next: ({ reply, message }) =>
            this.toastServices.show({
              color: 'success',
              message,
              icon: faCheckCircle,
              duration: 4000,
            }),
          error: (message) => {
            console.log(message);
            this.toastServices.show({
              color: 'error',
              message,
              icon: faCircleXmark,
              duration: 4000,
            });
          },
        });
      
    }
  }
  
  public setNull(){
    this.animalsService.setAnimal(null);
  }
  private loadSpecies() {
    this.speciesService.getSpecies()
      .subscribe({
      next: ({reply})=>this.species.set(reply)
    })
  }
}
