import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public userService: UserService, private navCtrl: NavController) {

  }


/*{
  "username":"e",
  "password":"e",

  "email": "loer@pp.com",
  "roles": ["Admin","Manager"]}*/
  nome: any;
  cognome: any;
  pass: any;
  email: any;

  ngOnInit() {
  }


  reg(){
    // tslint:disable-next-line:label-position
   const rt = this.userService.registration(this.email, this.pass, this.nome);

   return console.log(rt);
        // this.navCtrl.back();


  }}

