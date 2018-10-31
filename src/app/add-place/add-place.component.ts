import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city';
import { Place } from '../models/place';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { SpringApiService } from '../services/spring-api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
  providers: [OpenWeatherMapService, SpringApiService]
})
export class AddPlaceComponent implements OnInit {
  @Input() user: User;
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
    this.places = [];
    let currentCity = this.cities[this.selectedCity]
    console.log(currentCity, this.places)
    for(const idPlace of currentCity.idPlaces) {
      this.springService.getPlace(idPlace).subscribe(place =>{
        this.places.push(place);
      }, error =>{
        console.log('getPlace error: ', error);
      })
    }
  }

}
