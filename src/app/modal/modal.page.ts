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
  ) { this.localNotifications.on('click').subscribe(res => {
    const msg = res.data ? res.data.text : '';
    this.showAlert(res.title, res.text, msg);
  }); }

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

  showAlert(header, sub, msg){
    this.alertCtrl.create({
      header,
      subHeader : sub,
      message : msg,
      buttons : ['OK']
    }).then(alert => alert.present());
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
