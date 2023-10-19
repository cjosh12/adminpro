import { Injectable, inject } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { Observable, catchError, throwError } from 'rxjs';
import { Diets } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DietsService {
  private apiService = inject(ApiService);

  getDiet(diet_id:string): Observable<MyResponse<Diets>>{
    return this.apiService.getById<Diets>("animals", diet_id)
  }
  getDiets(): Observable<MyResponse<Diets[]>>{
    return this.apiService.getAll<Diets[]>("diets")
  }
  updateDiet(diet_id:string, diets:Diets): Observable<MyResponse<Diets>>{
    return this.apiService
    .update<Diets>("diets",diets, diet_id)
    .pipe(catchError((error) => throwError(() => error.error.message)));
  }
  deleteDiet(animal_id:string): Observable<MyResponse<Record<string, never>>>{
    return this.apiService
    .delete<Record<string, never>>("animals", animal_id)
    .pipe(catchError((error) => throwError(() => error.error.message)));
  }
}
