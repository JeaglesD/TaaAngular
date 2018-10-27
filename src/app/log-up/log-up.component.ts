import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../models/user';
@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  newUser: User;
  error: boolean;
  confPassword: string;

  constructor(
    private authenService : AuthentificationService
  ) {
    this.error = false;
    this.newUser = new User("", "", "", true, "ROLE_USER");
    this.confPassword = "";
  }

  ngOnInit() {
  }

  logup(){
    console.log('newUser', this.newUser);
    if(this.newUser.mail != "" &&
      this.newUser.password != "" &&
      this.newUser.pseudo != "" &&
      this.newUser.password == this.confPassword){
        //TODO Handle result authenService
        this.authenService.logUp(this.newUser).subscribe();
    }else{
      this.error = true;
    }
  }
}
