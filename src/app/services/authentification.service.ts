import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  authenticated = false;

  constructor(private http : HttpClient) { }

  authenticate(credentials, callback){
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.pseudo + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if(response['name']){
        this.authenticated = true;
      } else{
        this.authenticated = false;
      }
      return callback && callback();
    })
  }

  public logUp(user: User): Observable<any>{
    const url = '/api/users/create'
    return this.http.post<any>(url, user)
  }



}
