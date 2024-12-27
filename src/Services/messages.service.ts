import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontact } from '../Models/icontact';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private _http: HttpClient) {}

  getAllMessages(): Observable<Icontact[]> {
    return this._http.get<Icontact[]>(`${environment.baseUrl}Messages`);
  }

  getMessageByID(id: string): Observable<Icontact> {
    return this._http.get<Icontact>(`${environment.baseUrl}Messages/${id}`);
  }

  addMessage(message: Icontact): Observable<Icontact> {
    return this._http.post<Icontact>(`${environment.baseUrl}Messages`, message);
  }

  editMessage(id: string, message: Icontact): Observable<Icontact> {
    return this._http.put<Icontact>(
      `${environment.baseUrl}Messages/${id}`,
      message
    );
  }

  deleteMessage(id: string): Observable<Icontact> {
    return this._http.delete<Icontact>(`${environment.baseUrl}Messages/${id}`);
  }
}
