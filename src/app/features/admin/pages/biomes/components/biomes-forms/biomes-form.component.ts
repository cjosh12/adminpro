import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  public biome = computed(() => this.biomeService.currentBiome());

  public buildFormEffect = effect(() => {
    if(this.biome()){
      this.biomeForm = this.fb.group({
        name: [this.biome()!.name, [Validators.required]],
        image_url: [this.biome()!.image_url, [Validators.required, Validators
          .pattern('^(http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$')]],

      })
    }else{
      this.biomeForm = this.fb.group({
        name: ['', [Validators.required]],
        image_url: ['', [Validators.required, Validators
          .pattern('^(http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$')]],

      })
    }
  })

  }
