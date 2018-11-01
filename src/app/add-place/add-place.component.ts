import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city';
import { Place } from '../models/place';
import { SpringApiService } from '../services/spring-api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
  providers: [SpringApiService]
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
    this.getPlaces();
  }

  getCities() {
    this.springService.getCities(this.searchCity).subscribe(data => {
      this.cities = data;
    }, error => {
      console.log('getCities error:', error);
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
