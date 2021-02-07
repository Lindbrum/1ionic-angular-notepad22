import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {
  private alertController: any;
  private clickSub: Subscription;

  constructor(
      private modalCtrl: ModalController, private localNotifications: LocalNotifications, private alertCtrl: AlertController
  ) { }

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

  // Metodo notifica

  delayedNotif() {
    this.localNotifications.schedule({
      text: 'spero tu abbia aspettato',
      trigger: { at: new Date(new Date().getTime() + 2000) },
      led: 'FF0000',
    });
  }

  // Chiude Modal notifiche

  close(){
    this.modalCtrl.dismiss();
  }
}
