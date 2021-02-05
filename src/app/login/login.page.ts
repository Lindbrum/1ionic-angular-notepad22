import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, UtenteService} from '../services/utente.service';
import {Utente} from '../models/utente.models';
import {HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private utenteService: UtenteService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.loginFormModel = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });

  }

  goToDash() {
    this.navController.navigateRoot('');
  }

  goToSignIn() {
    this.navController.navigateRoot('registration');
  }

  goToPasswordRecovery() {
    this.navController.navigateRoot('forgot-password');
  }

  login() {
    const account: Account = this.loginFormModel.value;
    this.utenteService.login(account).subscribe((utente: Utente) => {
      this.loginFormModel.reset();
      this.navController.navigateRoot('');
    },
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            console.error('login request error: ' + err.status);
            this.showLoginError();
          }
        });
  }

  async showLoginError() {
    const alert = await this.alertController.create({
      header: this.loginTitle,
      message: this.loginSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }



}
