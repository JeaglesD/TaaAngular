import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor(private http : HttpClient) { }

  public getWeather(cityName : String, countryCode : String):Observable<Object>{
    let url = 'http://api.openweathermap.org/data/2.5/';
    url += 'weather?q=' + cityName + ','+ countryCode;
    url += '&units=metric';
    url += '&appid=765101ee5ca1fad460a6d0661982d228';
    return this.http.get(url);
  }


}
