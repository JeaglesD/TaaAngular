import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [AuthentificationService],
})
export class LogInComponent implements OnInit {


  isLoggedIn : boolean;
  currentUser : User;
  pseudo : string;
  password : string;

  constructor(private authenService : AuthentificationService) {
    this.pseudo = "";
    this.password = "";
    this.isLoggedIn = this.authenService.getIsLoggedIn();
    const idCurrentUser = this.authenService.getIdCurrentUser();
    this.authenService.getUser(idCurrentUser).subscribe(data =>{
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
    this.authenService.logIn(this.pseudo, this.password).subscribe(data =>{
        this.authenService.setIsLoggedIn(true);
        this.authenService.setIdCurrentUser(data.idUser);
        this.isLoggedIn = true;
        this.currentUser = data;
      },error =>{
        console.log('loginUser error', error)
      }
    )
  }

  logout(){
    console.log('logout')
    this.authenService.setIsLoggedIn(false);
    this.isLoggedIn = false;
    this.authenService.setIdCurrentUser(-1);
    this.currentUser = new User(-1, "", "", "");
  }

}
