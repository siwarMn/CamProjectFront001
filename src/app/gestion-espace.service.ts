import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LieuCentre} from "./Model/LieuCentre";

@Injectable({
  providedIn: 'root'
})
export class GestionEspaceService {

  constructor(private http: HttpClient) { }

  addEspace(file: File, LieuCentre: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('espace', JSON.stringify(LieuCentre));
    console.log('Espace ajouté avec succès', formData);
    return this.http.post<LieuCentre>("http://localhost:8083/addEspace", formData);
  }

  getEspaceImage(): Observable<LieuCentre[]> {
    return this.http.get<LieuCentre[]>('http://localhost:8083/listEspace');
  }

  deleteEspace(id: number): Observable<any> {
    const url = "http://localhost:8083/deletEspace/" + id; // Remplacez l'URL par celle de votre backend
    return this.http.delete(url);
  }

  updateEspace(data: any): Observable<any> {
    return this.http.put("http://localhost:8083/updateEspace", data);
  }




}
