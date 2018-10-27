import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenService: AuthentificationService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticated(): boolean{
    return this.authenService.authenticated;
  }

  logout(){
    this.http.post('logout', {}).subscribe(() => {
          this.authenService.authenticated = false;
          this.router.navigateByUrl('/login');
      });
  }
}
