export class Place {
  idPlace: number;
  name: string;
  address: string;
  idCity: number;
  idActivities: number[];
  idUsers: number[];
  constructor(idPlace, name, address, idCity, idActivities, idUsers) {
    this.idPlace = idPlace;
    this.name = name;
    this.address = address;
    this.idCity = idCity;
    this.idActivities = idActivities;
    this.idUsers = idUsers;
  }
}
