import { Injectable, computed, inject, signal } from '@angular/core';
import { MyResponse } from '@core/models';
import { ApiService } from '@core/services';
import { AnimalForm, Animals } from '@features/admin/models';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private apiService = inject(ApiService);
  private _currentAnimal = signal<Animals | null>(null);
  
  public currentAnimal = computed(() => this._currentAnimal());

  createAnimal(animalForm:AnimalForm){
    const {...animalbody}=animalForm
    return this.apiService
      .store<AnimalForm>('animals', animalbody)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }

  getAnimal(animal_id:string): Observable<MyResponse<Animals>>{
    return this.apiService.getById<Animals>("animals", animal_id)
  }

  getAnimals(): Observable<MyResponse<Animals[]>>{
    return this.apiService.getAll<Animals[]>("animals")
  }

  updateAnimal(animal_id:string, animalForm:AnimalForm): Observable<MyResponse<Animals>>{
    return this.apiService
    .update<Animals>("animals", animalForm, animal_id)
    .pipe(catchError((error) => throwError(() => error.error.message)));
  }
  
  deleteAnimal(animal_id:string): Observable<MyResponse<Record<string, never>>>{
    return this.apiService
    .delete<Record<string, never>>("animals", animal_id)
    .pipe(catchError((error) => throwError(() => error.error.message)));
  }

  setAnimal(animal: Animals | null){
    this._currentAnimal.set(animal);
  }
}
