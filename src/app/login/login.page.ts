import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ModalController} from '@ionic/angular';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  person: any;
  allert: any;

  constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.allert = 'loggati per sincronizzare le note';

  }


     loging(){
  this.person = this.userService.gettoken(this.username, this.password);
  this.allert = JSON.stringify(this.person);

} }
