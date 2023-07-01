import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class GestionProduitService {

  constructor(private http: HttpClient) { }

    addProduit(file: File, produit: any): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append('produit', JSON.stringify(produit));
      console.log('Produit ajouté avec succès', formData);
      return this.http.post<Produit>("http://localhost:8080/Produits/AddProduct", formData);
    }


    getProduitsAvecImages(): Observable<Produit[]> {
      return this.http.get<Produit[]>('http://localhost:8080/Produits/GetAllProducts');
    }

    deleteProduct(id: number): Observable<any> {
      const url = "http://localhost:8080/Produits/" + id; // Remplacez l'URL par celle de votre backend
      return this.http.delete(url);
    }

    updateProd(data: any): Observable<any> {
      return this.http.put("http://localhost:8080/Produits/UpdateProduct", data);
    }
}
