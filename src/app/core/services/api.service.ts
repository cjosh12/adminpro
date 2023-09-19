import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ApiService{
    private apiUrl!: string;

    //Inyección de dependencias
    private httpClient = inject(HttpClient);

    constructor(){
        this.apiUrl = environment.api;
    }

    //Metodos globales peticiones Http
    getAll(path: string): Observable<object>{
        return this.httpClient.get(`${this.apiUrl}/${path}`);
    }

    getById(path: string, id: number | string): Observable<object>{
        return this.httpClient.get(`${this.apiUrl}/${path}/${id}`);
    }

    store(path: string, body: any): Observable<object>{
        return this.httpClient.post(`${this.apiUrl}/${path}`,body);
    }

    update(path: string, body: object, id: number | string): Observable<object>{
        return this.httpClient.patch(`${this.apiUrl}/${path}/${id}`,body);
    }

    delete(path: string, id: number | string): Observable<object>{
        return this.httpClient.delete(`${this.apiUrl}/${path}/${id}`);
    }
}