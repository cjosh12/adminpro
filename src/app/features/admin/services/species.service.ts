import { Injectable, inject } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { Observable, catchError, throwError } from 'rxjs';
import { Species } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private apiService = inject(ApiService);

  getSpecie(species_id: string): Observable<MyResponse<Species>>{
    return this.apiService.getById<Species>("species", species_id)
  }
  getSpecies(): Observable<MyResponse<Species[]>>{
    return this.apiService.getAll<Species[]>("species")
  }
  updateSpecies(species_id: string, species: Species): Observable<MyResponse<Species>>{
    return this.apiService
    .update<Species>("species", species, species_id)
    .pipe(catchError((error)=> throwError(() => error.error.message)));
  }
  deleteSpecies(species_id: string): Observable<MyResponse<Record<string, never>>>{
    return this.apiService
    .delete<Record<string, never>>("species", species_id)
    .pipe(catchError((error)=> throwError(() => error.error.message)));
  }
}
