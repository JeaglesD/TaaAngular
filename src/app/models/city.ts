

export class City {
  idCity: number;
  name: string;
  postCode: number;
  idPlaces: number[];

  constructor(idCity, name, postCode, idPlaces) {
    this.idCity = idCity;
    this.name = name;
    this.postCode = postCode;
    this.idPlaces = idPlaces;
  }
}
