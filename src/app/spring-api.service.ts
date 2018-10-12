import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';
import { Place } from './place';
@Injectable({
  providedIn: 'root'
})
export class SpringApiService {

  constructor(private http : HttpClient) {}

  public getCities() : Observable<City[]>{
    var url = '/api/cities/'
    return this.http.get<City[]>(url)
  }

  public getCity(idCity : number): Observable<City>{
    var url = '/api/cities/'+ idCity
    return this.http.get<City>(url)
  }

  public getPlace(idPlace : number): Observable<City>{
    var url = '/api/places/'+ idPlace
    return this.http.get<City>(url)
  }
}
