export class User {
  idUser : number;
  pseudo : string;
  password : string;
  mail: string;
  enabled: boolean;
  role: string;
  idPlaces : number[];
  constructor(pseudo, password, mail, enalbed, role){
    this.pseudo = pseudo;
    this.password = password;
    this.mail = mail;
    this.enabled = enalbed;
    this.role = role;
    this.idPlaces = [];
  }
}
