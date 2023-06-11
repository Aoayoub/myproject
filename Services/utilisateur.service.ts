import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Utilisateur } from 'Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseURL = "http://localhost:8080/api/v1/utilisateurs";

  constructor(private httpClient: HttpClient) { }

  getUtilisateurList(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.baseURL}`);
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, utilisateur);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(`${this.baseURL}/${id}`);
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
