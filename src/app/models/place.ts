export class Place {
  idPlace: number;
  name: string;
  address: string;
  idCity: number;
  idActivites: number[];
  idUsers: number[];
  constructor(idPlace, name, address, idCity, idActivites, idUsers) {
    this.idPlace = idPlace;
    this.name = name;
    this.address = address;
    this.idCity = idCity;
    this.idActivites = idActivites;
    this.idUsers = idUsers;
  }
}
