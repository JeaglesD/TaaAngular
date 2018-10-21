export class User {
  idUser : number;
  pseudo : string;
  password : string;
  mail: number;
  idPlaces : number[];
  constructor(idUser, pseudo, mail, idPlaces){
    this.idUser = idUser;
    this.pseudo = pseudo;
    this.mail = mail;
    this.idPlaces = idPlaces;
  }
}
