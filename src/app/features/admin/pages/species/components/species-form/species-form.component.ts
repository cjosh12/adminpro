import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpeciesService } from '@features/admin/services';

@Component({
  selector: 'species-form',
  templateUrl: './species-form.component.html',
  styles: []
})
export class SpeciesFormComponent {
  private speciesService = inject(SpeciesService);
  private fb = inject(FormBuilder);

  public specieForm!: FormGroup;
  public nameLabel = 'Nombre';
  public descriptionLabel = 'Descripción';
  public scientificLabel = 'Nombre Cientifico';
  public createdLabel = 'Creación';
  public updatedLabel = 'Fecha de Modificación';
  public biomeLabel = 'Bioma o Habitat';
  public dietLabel = 'Tipo de Alimentación';

  public specie = computed(() => this.speciesService.currentSpecie())

  public buildFormEffect = effect(() => {
    if(this.specie()){
      this.specieForm = this.fb.group({
        name: [this.specie()!.name, [Validators.required]],
        description: [this.specie()!.description, [Validators.required]],
        scientific_name: [this.specie()!.scientific_name, [Validators.required]],
        biome: [this.specie()!.biome, [Validators.required]],
        diets: [this.specie()!.diets, [Validators.required]],
      })
    }else{
      this.specieForm = this.fb.group({
        name: ['',[Validators.required]],
        description: ['',[Validators.required]],
        scientific_name: ['',[Validators.required]],
        biome: ['',[Validators.required]],
        diets: ['',[Validators.required]],
      })
    }
  })
}

