import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activite } from './Model/Activite';

@Injectable({
  providedIn: 'root'
})
export class GestionActiviteService {

  constructor(private http: HttpClient) { }

  addActivite(activite :Activite){
    return this.http.post<Activite>("http://localhost:8089/activite/add-activite-image", activite);
  }
}
