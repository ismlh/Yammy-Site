import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeal } from '../Models/imeal';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private _http: HttpClient) {}

  getAllMeals(): Observable<IMeal[]> {
    return this._http.get<IMeal[]>(`${environment.baseUrl}Meals`);
  }

  getMealByID(id: any): Observable<IMeal> {
    return this._http.get<IMeal>(`${environment.baseUrl}Meals/${id}`);
  }
  addMeal(meal: IMeal): Observable<IMeal> {
    return this._http.post<IMeal>(`${environment.baseUrl}Meals`, meal);
  }

  editMeal(id: string, meal: IMeal): Observable<IMeal> {
    return this._http.put<IMeal>(`${environment.baseUrl}Meals/${id}`, meal);
  }

  deleteMeal(id: string): Observable<IMeal> {
    return this._http.delete<IMeal>(`${environment.baseUrl}Meals/${id}`);
  }
}
