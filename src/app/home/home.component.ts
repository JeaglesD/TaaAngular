import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticated(): boolean{
    return this.authenService.isAuthenticated();
  }

  logout(){
    this.authenService.logout(() => {
      this.router.navigateByUrl('/login')
    });

  }
}
