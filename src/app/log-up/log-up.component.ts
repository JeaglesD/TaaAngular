import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  mail: string;
  pseudo: string;
  password: string;

  constructor(private authenService : AuthentificationService) {
    this.mail = "";
    this.pseudo = "";
    this.password = "";
  }

  ngOnInit() {
  }

  logup(){

    this.authenService.logUp();
  }
}
