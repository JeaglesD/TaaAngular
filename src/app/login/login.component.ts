import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthentificationService],
})
export class LoginComponent implements OnInit {


  isLoggedIn : boolean;
  currentUser : User;
  pseudo : string;
  password : string;

  constructor(private authentificationService : AuthentificationService) {
    this.pseudo = "";
    this.password = "";
    this.isLoggedIn = this.authentificationService.getIsLoggedIn();
    const idCurrentUser = this.authentificationService.getIdCurrentUser();
    this.authentificationService.getUser(idCurrentUser).subscribe(data =>{
        this.currentUser = data
      }, error =>{
        console.log('constructor error', error);
        this.currentUser = new User(NaN, "", "", "");
      }
    )
  }

  ngOnInit() {
  }

  login(){
    this.authentificationService.logIn(this.pseudo, this.password).subscribe(data =>{
        this.authentificationService.setIsLoggedIn(true);
        this.authentificationService.setIdCurrentUser(data.idUser);
        this.isLoggedIn = true;
        this.currentUser = data;
      },error =>{
        console.log('loginUser error', error)
      }
    )
  }

  logout(){
    console.log('logout')
    this.authentificationService.setIsLoggedIn(false);
    this.isLoggedIn = false;
    this.authentificationService.setIdCurrentUser(-1);
    this.currentUser = new User(-1, "", "", "");
  }

}
