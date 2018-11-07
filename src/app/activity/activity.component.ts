import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;
  @Input() temp: number;
  available: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.available = this.activity.minTemp < this.temp &&
    this.activity.maxTemp > this.temp;
  }
}
