import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        name: [this.specie()!.name],
        description: [this.specie()!.description],
        scientific_name: [this.specie()!.scientific_name],
        created_at: [this.specie()!.created_at],
        updated_at: [this.specie()!.updated_at],
        biome: [this.specie()!.biome],
        diets: [this.specie()!.diets],
      })
    }else{
      this.specieForm = this.fb.group({
        name: [''],
        description: [''],
        scientific_name: [''],
        created_at: [''],
        updated_at: [''],
        biome: [''],
        diets: [''],
      })
    }
  })
}

