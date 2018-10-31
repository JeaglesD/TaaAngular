import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterCityPipePipe } from './filter-city--pipe.pipe';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogUpComponent } from './log-up/log-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceComponent } from './place/place.component';
import { AddPlaceComponent } from './add-place/add-place.component';

const routes : Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LogInComponent, },
  { path: 'logup', component : LogUpComponent, },
  { path: 'home', component: HomeComponent, },
];

@NgModule({
  declarations: [
    AppComponent,
    FilterCityPipePipe,
    AddPlaceComponent,
    LogInComponent,
    HomeComponent,
    LogUpComponent,
    DashboardComponent,
    PlaceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
