import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [AuthentificationService],
})
export class LogInComponent implements OnInit {

credentials = {pseudo: '', password: ''};

  constructor(
    private authenService : AuthentificationService,
    private router: Router) {
  }

  ngOnInit() {
  }

  login(){
    this.authenService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/home');
    })
  }
}
