import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {Subscription} from 'rxjs';
import * as moment from 'moment';
import {Data} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  constructor(
      private modalCtrl: ModalController, private localNotifications: LocalNotifications
  ) { }

  private alertController: any;
  private clickSub: Subscription;

time: string = moment().toISOString();

  // Metodo notifica
  scheduleDate = moment(this.time).toDate();
  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: data,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

  delayedNotif() {
    this.localNotifications.schedule({
      text: 'spero tu abbia aspettato',
      trigger: { at: new Date(new Date().getTime() + 2000) },
     // trigger: { at: new Date(new Date().setTime(this.sveglia))},
      led: 'FF0000',
    });
    console.log('passato per notifiche' + this.time);
  }

  // Chiude Modal notifiche

  close(){
    this.modalCtrl.dismiss();
  }
}
