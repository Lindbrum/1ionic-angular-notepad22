import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import { NotesService } from '../services/notes.service';
import {ModalPage} from '../modal-notifiche/modal.page';
import {ModalCheckViewPage} from '../modal-check-view/modal-check-view.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController,
              private modalCtrl: ModalController){

  }


/*
   addNote(){

    this.alertCtrl.create({
      header: 'nuova nota',
      message: 'Inserisci un titolo',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'elimina'
        },
        {
          text: 'salva',
          handler: (data) => {
            this.notesService.createNote(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }
*/

  // tslint:disable-next-line:ban-types
  filterTerm: String;
  ngOnInit(){
    this.notesService.load();
  }

  // metodo per aprire schermata login

  goToLogin(){
    this.navCtrl.navigateRoot('login');
  }

  async showModalElenco() {
    const modal = await this.modalCtrl.create({
      component: ModalCheckViewPage
    }).then(modals => {
      modals.present();
    });
  }

// Metodo per il Refresh

  doRefresh(event) {
    console.log('Begin async operation');
    this.notesService.load();

// TimeOut per il Refresh

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }
}
