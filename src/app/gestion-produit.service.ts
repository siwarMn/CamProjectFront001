import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class GestionProduitService {

  constructor(private http: HttpClient) { }
  addProduit(produit:Produit){
    return this.http.post<Produit>("http://localhost:8080/Produits/AddProduct",produit);
    }



}
