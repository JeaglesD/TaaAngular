import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { LogUpComponent } from '../log-up/log-up.component';
import { HomeComponent } from '../home/home.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'logup',
    component : LogUpComponent,
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
