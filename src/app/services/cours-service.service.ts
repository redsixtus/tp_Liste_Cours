import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelCours } from '../cours/model';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ModelCours[]>  {
    return this.http.get<ModelCours[]>(url);
  }
  public findOne(c: ModelCours): Observable<ModelCours>{
    return this.http.get<ModelCours>(url+'/'+c.nom);
  }

  public add(c: ModelCours): Observable<ModelCours>  {
    return this.http.post<ModelCours>(url,c);
  }

  public update(c: ModelCours): Observable<ModelCours>  {
    return this.http.put<ModelCours>(url+'/'+c.id,c);
  }

  public delete(c: ModelCours): Observable<ModelCours>  {
    return this.http.delete<ModelCours>(url+'/'+c.id);
  }

}
