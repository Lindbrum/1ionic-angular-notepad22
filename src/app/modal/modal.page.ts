import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
      private modalCtrl: ModalController, private localNotifications: LocalNotifications, private alertCtrl: AlertController
  ) { }

  delayed_notification() {
    // Schedule delayed notification
    this.localNotifications.schedule({
      title: 'notifications',
      text: 'Delayed ILocalNotification',
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
      led: 'FF0000',
      sound: null
    });
  }

  ngOnInit() {
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Imposta Alert',
      subHeader : 'subHeader',
      message : 'msg',
      buttons : ['OK']
    });
    await alert.present();
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
