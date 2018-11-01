import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { City } from '../models/city';
import { Place } from '../models/place';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class SpringApiService {
  constructor(private http: HttpClient) {}

  public getCities(search: string): Observable<City[]> {
    const url = '/api/cities/name/' + search;
    return this.http.get<City[]>(url);
  }

  public getCity(idCity: number): Observable<City> {
    const url = '/api/cities/' + idCity;
    return this.http.get<City>(url);
  }

  public getPlace(idPlace: number): Observable<Place> {
    const url = '/api/places/' + idPlace;
    return this.http.get<Place>(url);
  }

  public getActivity(idActivity: number): Observable<Activity> {
    const url = '/api/activities/' + idActivity;
    return this.http.get<Activity>(url);
  }

  public getUserByPseudo(pseudo: String): Observable<User>{
    const url = '/api/users/pseudo/' + pseudo;
    return this.http.get<User>(url);
  }

  addPlaceToUser(idPlace: number, idUser: number):Observable<User>{
    const url = '/api/users/' + idUser + '/addPlace/' + idPlace;
    return this.http.put<User>(url, {});
  }
  removePlaceToUser(idPlace: number, idUser: number):Observable<User>{
    const url = '/api/users/' + idUser + '/removePlace/' + idPlace;
    return this.http.put<User>(url, {});
  }
}
