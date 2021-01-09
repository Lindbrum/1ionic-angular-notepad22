import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, NavController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {
  title: any;
  content: any;
  color: string;

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController,
              private modalCtrl: ModalController ) {
}
ngOnInit(){
  this.notesService.load();
}
// funzione chiamata dal pulsante "salva"
addNote(){
  this.notesService.createNote(this.title, this.content, this.color);
  this.navCtrl.back();

}

goToLogin(){
  this.navCtrl.navigateRoot('login');
}

async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPage
    }).then( modals => {
        modals.present();
    });

}


}
