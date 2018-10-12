export class Place {
  idPlace : number;
  name : string;
  address : string;
  idCity: number;
  idActivites : number[];
  idUsers : number[];
  constructor(idPlace, name, address, city, idActivites, idUsers){
    this.idPlace = idPlace;
    this.name = name;
    this.address = address;
    this.city = city;
    this.idActivites = idActivites;
    this.idUsers = idUsers;
  }
}
