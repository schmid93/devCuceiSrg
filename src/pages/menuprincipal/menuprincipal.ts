import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menuprincipal',
  templateUrl: 'menuprincipal.html',
})
export class MenuprincipalPage {

  nombre: string;
  email: string;
  imagen: string;
  mostrar:boolean;
  dominio = "@alumnos.udg.mx";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.email = this.navParams.get("correo");
    this.imagen = this.navParams.get("imagen");
    this.validate();
  }
  validate(){
    if (this.email.indexOf(this.dominio) != -1) {
      return this.mostrar = false;
    }else{
      return this.mostrar = true;
    }
  }
}

  
