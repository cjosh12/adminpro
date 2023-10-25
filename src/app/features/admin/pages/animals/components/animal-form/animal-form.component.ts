import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalsService } from '@features/admin/services';

@Component({
  selector: 'animal-form',
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent {
  private animalsService = inject(AnimalsService);
  private fb = inject(FormBuilder);

  public animalForm!: FormGroup;
  public nameLabel = 'Nombre';
  public ageLabel = 'Edad';
  public genderLabel = 'Genero';
  public arrivalLabel = 'Llegada';
  public health_conditionLabel = 'Salud';
  public exhibiy_statusLabel = 'Exhibido'
  public speciesLabel = 'Especie';
  public update_atLabel = 'Fecha de Modificación';

  public animal = computed(() => this.animalsService.currentAnimal())



  public buildFormEffect = effect(()=>{
    if(this.animal()){
      this.animalForm = this.fb.group({
      name: [this.animal()!.name, Validators.minLength],
      age: [this.animal()!.age],
      gender: [this.animal()!.gender],
      arrival: [this.animal()!.arrival],
      health_condition: [this.animal()!.health_condition],
      exhibit_status: [this.animal()!.exhibit_status],
      species: [this.animal()!.species],
      updated_at: [this.animal()!.updated_at],
      })
    }else{
      this.animalForm  = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      arrival: [''],
      health_condition: [''],
      exhibit_status: [''],
      species: [''],
      updated_at: [''],
      })
    }
  })
}
