import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController ) {
}
ngOnInit(){
  this.notesService.load();
}

addNote(){

  this.alertCtrl.create({
    header: 'nuova nota dimenticone del cazzo',
    message: 'se non metti un titolo allora mi devo proprio incazzare?',
    inputs: [
      {
        type: 'text',
        name: 'title'
      }
    ],
    buttons: [
      {
        text: 'elimina sto schifo'
      },
      {
        text: 'salviamo il covid come nota',
        handler: (data) => {
          this.notesService.createNote(data.title);
        }
      }
    ]
  }).then((alert) => {
    alert.present();
  });

}

goToLogin(){
  this.navCtrl.navigateRoot('login');
}

}