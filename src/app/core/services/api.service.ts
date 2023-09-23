import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

import { MyResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl!: string;

  // Inyección de dependencias
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.api;
  }

  // Métodos globales para las peticiones HTTP (GET, POST, PATCH, DELETE)
  getAll<T>(path: string, headers?: HttpHeaders): Observable<MyResponse<T>> {
    return this.httpClient.get<MyResponse<T>>(`${this.apiUrl}/${path}`, { headers });
  }

  getById<T>(path: string, id: number | string): Observable<MyResponse<T>> {
    return this.httpClient.get<MyResponse<T>>(`${this.apiUrl}/${path}/${id}`);
  }

  store<T>(path: string, body: object): Observable<MyResponse<T>> {
    return this.httpClient.post<MyResponse<T>>(`${this.apiUrl}/${path}`,body);
  }

  update<T>(path: string, body: object, id: number | string): Observable<MyResponse<T>> {
    return this.httpClient.patch<MyResponse<T>>(`${this.apiUrl}/${path}/${id}`,body);
  }

  delete<T>(path: string, id: number | string): Observable<MyResponse<T>> {
    return this.httpClient.delete<MyResponse<T>>(`${this.apiUrl}/${path}/${id}`);
  }

}