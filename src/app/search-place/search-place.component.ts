import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { Place } from '../models/place';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { SpringApiService } from '../services/spring-api.service';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css'],
  providers: [OpenWeatherMapService, SpringApiService]
})
export class SearchPlaceComponent implements OnInit {
  searchCity: string;
  selectedCity: number;
  cities: City[];
  searchPlace: string;
  selectedPlace: number;
  places: Place[];

  constructor(
    private weatherService: OpenWeatherMapService,
    private springService: SpringApiService) {
    this.searchCity = '';
    this.selectedCity = -1;
    this.cities = [];

    this.searchPlace = '';
    this.selectedPlace = -1;
    this.places = [];
  }

  ngOnInit() {
  }

  onChangeCity() {
    this.getWeather();
    this.getPlaces();
  }

  getCities() {
    this.springService.getCities(this.searchCity).subscribe(data => {
      this.cities = data;
    }, error => {
      console.log('getCities error:', error);
    });
  }

  getWeather() {
    const cityName = this.cities[this.selectedCity].name;
    this.weatherService.getWeather(cityName, 'fr').subscribe(data => {
      console.log('getWeather', data);
    }, error => {
      console.log('getWeather error:', error);
    });
  }

  getPlaces() {
    console.log('selectedCity', this.cities[this.selectedCity]);
    for (const idPlace of this.cities[this.selectedCity].idPlaces) {
      console.log('places', this.places);
       this.springService.getPlace(idPlace).subscribe(data => {
         this.places.push(data);
       }, error => {
         console.log('getPlaces error:', error);
       });
    }
  }

}
