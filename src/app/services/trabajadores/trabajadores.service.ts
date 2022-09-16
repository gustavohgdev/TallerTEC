import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TrabajadorResponse } from './trabajadores.types';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

   // Definiendo ruta a la que se hara los request http relacionados a los trabajadores
   private trabajadoresUrl: string = `${environment.apiUrl}/manage/worker`;
 
   private httpOptions = {
     headers: new HttpHeaders({
       "Content-Type":  "application/json",
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
       "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
     })
   };
 
   constructor(private http: HttpClient, private router: Router) {}
 
   /**
    * Metodo para obtener la lista de todos los trabajadores.
    * @returns observable del query: Observable<TrabajadorResponse[]>.
    */
   todosTrabajadores() {
     return this.http.get<TrabajadorResponse>(`${this.trabajadoresUrl}/all`, this.httpOptions);
   }
 
}
