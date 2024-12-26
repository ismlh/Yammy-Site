import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from '../Models/ireservation';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReserIReservationvationServiceService {

  constructor(private _httpClient:HttpClient) { }

  getAll():Observable<IReservation[]>{
    return this._httpClient.get<IReservation[]>(`${environment.baseUrl}Reservations`);
  }

  getReservationById(id:string):Observable<IReservation>{
    return this._httpClient.get<IReservation>(`${environment.baseUrl}Reservations/${id}`);
  }

  addReservation( reservation:IReservation):Observable<IReservation>{
    return this._httpClient.post<IReservation>(`${environment.baseUrl}Reservations/`,reservation);
  }

  updateReservation(id:any , reservation:IReservation):Observable<IReservation>{
    return this._httpClient.put<IReservation>(`${environment.baseUrl}Reservations/${id}`,reservation);
  }

  deleteReservation(id:any):Observable<IReservation>{
    return this._httpClient.delete<IReservation>(`${environment.baseUrl}Reservations/${id}`)
  }
}
