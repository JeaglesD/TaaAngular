import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor(private authenService: AuthentificationService){
    this.title = 'angular';
    this.authenService.authenticate(undefined, undefined);
  }

}
