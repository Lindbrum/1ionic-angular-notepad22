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
  private ddd: any;
  private alertController: any;
  private clickSub: Subscription;
  data: any;
  time: any; // string = moment().toISOString();






  constructor(
      private modalCtrl: ModalController, private localNotifications: LocalNotifications
  ) { }




  // Metodo notifica
  scheduleDate = moment().toISOString();
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

    // this.ttt = new Date().setDate(moment(this.data).toDate().getDate());
    // this.ttt.setTime(moment(this.time).toDate().getTime());

    this.ddd =  Date.UTC(moment(this.data).toDate().getUTCFullYear(),
        moment(this.data).toDate().getUTCMonth(),
        moment(this.data).toDate().getUTCDate(),
        moment(this.time).toDate().getUTCHours(),
        moment(this.time).toDate().getUTCMinutes(),
        moment(this.time).toDate().getUTCSeconds());




    this.localNotifications.schedule({
      text: 'spero tu abbia aspettato',


      trigger: { at: new Date(moment(this.ddd).toDate() )},
     // trigger: { at: new Date(new Date().setTime(this.sveglia))},
      led: 'FF0000',
    });
    console.log('passato per notifiche; la sveglia è [' +

       moment(this.ddd).toISOString()




        + ']------impostata alla DATE  [' + this.scheduleDate);
  }

  // Chiude Modal notifiche



  close(){
    this.modalCtrl.dismiss();
  }
}
