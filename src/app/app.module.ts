import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { FilterCityPipePipe } from './filter-city--pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPlaceComponent,
    FilterCityPipePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
