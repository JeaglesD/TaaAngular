import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http : HttpClient) { }

  public setIsLoggedIn(value: boolean){
    localStorage.setItem("isLoggedIn", value.toString());
  }

  public getIsLoggedIn(): boolean{
    return JSON.parse(localStorage.getItem('isLoggedIn') || false.toString())
  }

  public setIdCurrentUser(idUser :  number){
    localStorage.setItem("idCurrentUser", idUser.toString());
  }

  public getIdCurrentUser(): number{
    return parseInt(localStorage.getItem('idCurrentUser'));
  }

  public logIn(username : string, password : string): Observable<User>{
   const url = '/api/users/pseudo/' + username + '/password/' + password
   return this.http.get<User>(url);
  }

  public getUser(idUser : number): Observable<User>{
    const url = '/api/users/' + idUser;
    return this.http.get<User>(url);
  }

  public logUp(user : User){
    
  }



}
