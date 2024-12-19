import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMealCategory } from '../Models/imeal-category';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MealCategoryService {
  constructor(private _http: HttpClient) {}

  getAllMealCategories(): Observable<IMealCategory[]> {
    return this._http.get<IMealCategory[]>(`${environment.baseUrl}Categories`);
  }

  addCategory(mealCategory: IMealCategory): Observable<IMealCategory> {
    return this._http.post<IMealCategory>(
      `${environment.baseUrl}Categories`,
      mealCategory
    );
  }

  getMealCategoryByID(id: any): Observable<IMealCategory> {
    return this._http.get<IMealCategory>(
      `${environment.baseUrl}Categories/${id}`
    );
  }
  updateCategory(id: any, category: IMealCategory): Observable<IMealCategory> {
    return this._http.put<IMealCategory>(
      `${environment.baseUrl}Categories/${id}`,
      category
    );
  }
  deleteMealCategory(id: string): Observable<IMealCategory> {
    return this._http.delete<IMealCategory>(
      `${environment.baseUrl}Categories/${id}`
    );
  }
}
