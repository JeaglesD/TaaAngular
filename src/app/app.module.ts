import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { FilterCityPipePipe } from './filter-city--pipe.pipe';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { LogUpComponent } from './log-up/log-up.component';

const routes : Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LogInComponent, },
  { path: 'logup', component : LogUpComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterCityPipePipe,
    SearchPlaceComponent,
    LogInComponent,
    HomeComponent,
    LogUpComponent,
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
