import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BiomeService } from '@features/admin/services';

@Component({
  selector: 'biomes-form',
  templateUrl: './biomes-form.component.html'
})
export class BiomesFormComponent {
  private biomeService = inject(BiomeService);
  private fb = inject(FormBuilder);

  public biomeForm!: FormGroup;
  public nameLabel = 'Nombre';
  public imagenLabel = 'imagen_url';
  public createdLabel = 'Fecha de Creación';
  public updatedLabel = 'Fecha de Modificacón';

  public biome = computed(() => this.biomeService.currentBiome());

  public buildFormEffect = effect(() => {
    if(this.biome()){
      this.biomeForm = this.fb.group({
        name: [this.biome()!.name],
        image_url: [this.biome()!.image_url],
        created_at: [this.biome()!.created_at],
        updated_at: [this.biome()!.updated_at],
      })
    }else{
      this.biomeForm = this.fb.group({
        name: [''],
        image_url: [''],
        created_at: [''],
        updated_at: [''],
      })
    }
  })

  }
