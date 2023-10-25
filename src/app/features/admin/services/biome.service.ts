import { Injectable, computed, inject, signal } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { Observable, catchError, throwError } from 'rxjs';
import { Biome } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BiomeService {
  
  private apiService = inject(ApiService);
  private _currentBiome = signal<Biome | null>(null);

  public currentBiome = computed(() => this._currentBiome())

  getBiome(biome_id:string):Observable<MyResponse<Biome>> {
    return this.apiService.getById<Biome>("biome",biome_id)
  }

  getBiomes() :Observable<MyResponse<Biome[]>>{
    return this.apiService.getAll<Biome[]>("biome")
  }
  
  setBiome(biome: Biome){
    this._currentBiome.set(biome);
  }

  updateBiome(biome_id:string, biome: Biome ):Observable<MyResponse<Biome>>  { 
    return this.apiService
      .update<Biome>("biome", biome, biome_id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
  
  deleteBiome(biome_id:string):Observable<MyResponse<Record<string, never>>>  { 
    return this.apiService
      .delete<Record<string, never>>("biome",biome_id)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
}
