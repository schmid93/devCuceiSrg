import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-loginweb',
  templateUrl: 'loginweb.html',
})
export class LoginwebPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

validation(){
  swal({
    title:"Escribe la contraseña de Acceso",
    content: {
               element: "input",
               attributes: {
                   placeholder: "Type Password Access",
                   type: "password"
                    },
            },
   className: "pasSwal"
 }).then((password)=>{
     let key = "Q3VjZWlTUkcxRGF0YWJhc2VBZG1pbjEwNTg=";
           //get the password and encode in base64
           if(btoa(password)==key){
                swal("¡Acceso Correcto!, Redirigiendo al Administrador...");
                location.href = 'http://127.0.0.1:8000/admin';
           }else if(password=="")
           {
             swal("No se ingreso ningun dato.");
           }
           else{
             swal("contraseña Incorrecta");
           }
});
}

authSys(){
  swal({
    title:"Escribe tu clave de Acceso",
    content: {
               element: "input",
               attributes: {
                   placeholder: "Escribe tu clave",
                   type: "password"
                    },
            },
   className: "pasSwal"
 }).then((password)=>{
     //let key = "Q3VjZWlTUkcxRGF0YWJhc2VBZG1pbjEwNTg=";
     let clave = password;
           //get the password and encode in base64
           if(clave == 'miguel123'){
                swal("¡Acceso Correcto!, Redirigiendo al Administrador...");
                // location.href = 'http://127.0.0.1:8000/admin';
           }else if(password=="" || password == null)
           {
             swal("No se ingreso ningun dato.");
           }
           else{
             swal("contraseña Incorrecta");
           }
});
}

  AdPrivacy(){
    swal({
    title: "Aviso de Privacidad",
    text: "En Construcción",
    icon: "info",
  });
  }

}
