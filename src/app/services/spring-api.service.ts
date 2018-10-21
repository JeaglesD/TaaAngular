import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Place } from '../models/place';
@Injectable({
  providedIn: 'root'
})
export class SpringApiService {

  constructor(private http : HttpClient) {}

  public getCities(search : string) : Observable<City[]>{
    const url = '/api/cities/name/' + search;
    return this.http.get<City[]>(url)
  }

  public getCity(idCity : number): Observable<City>{
    const url = '/api/cities/'+ idCity
    return this.http.get<City>(url)
  }

  public getPlace(idPlace : number): Observable<Place>{
    console.log(idPlace, 'idPlace')
    const url = '/api/places/'+ idPlace
    return this.http.get<Place>(url)
  }


}
