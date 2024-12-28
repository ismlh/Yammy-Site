import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChef } from '../Models/ichef';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ChefsServiceService {
  constructor(private _http: HttpClient) {}

  getAllChefs(): Observable<IChef[]> {
    return this._http.get<IChef[]>(`${environment.baseUrl}Chefs`);
  }

  getChefById(id: any): Observable<IChef> {
    return this._http.get<IChef>(`${environment.baseUrl}Chefs/${id}`);
  }

  addChef(chef: IChef): Observable<IChef> {
    return this._http.post<IChef>(`${environment.baseUrl}Chefs`, chef);
  }

  updateChef(id: string, chef: IChef): Observable<IChef> {
    return this._http.put<IChef>(`${environment.baseUrl}Chefs/${id}`, chef);
  }
  deleteChef(id: string): Observable<IChef> {
    return this._http.delete<IChef>(`${environment.baseUrl}Chefs/${id}`);
  }
}
