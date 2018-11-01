export class Activity {
  idActivity: number;
  name: string;
  minTemp: number;
  maxTemp: number;

  constructor(idActivity, name, minTemp, maxTemp){
    this.idActivity = idActivity;
    this.name = name;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
  }
}
