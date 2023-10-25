import { Component, OnInit, inject, signal } from '@angular/core';
import { ToastService } from '@core/services';
import { Biome } from '@features/admin/models';
import { BiomeService } from '@features/admin/services';
import { faCircleXmark, faEllipsis, faPencil, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-biomes',
  templateUrl: './biomes.component.html',
  styles: []
})
export class  BiomesComponent implements OnInit {

  private biomeService = inject(BiomeService);
  private toastService = inject(ToastService);

  public faEllipsis = signal(faEllipsis);
  public faPencil = signal(faPencil);
  public faSkullCrossbones = signal(faSkullCrossbones);
  public biomes = signal<Biome[]>([]);

  ngOnInit(): void {
      this.getBiomes();
  }

  public setBiome(biome:Biome){
    this.biomeService.setBiome(biome);
  }

  private getBiomes(){
    this.biomeService.getBiomes().subscribe({
      next: ({statusCode, reply, message}) => {
        if (statusCode === 200){ 
        this.biomes.set(reply);
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
