import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {
  title: any;
  content: any;
  color: string;

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController ) {
}
ngOnInit(){
  this.notesService.load();
}
// funzione chiamata dal pulsante "salva"
addNote(){
  this.notesService.createNote(this.title, this.content, this.color);
  this.notesService.load();
  this.navCtrl.back();

}

goToLogin(){
  this.navCtrl.navigateRoot('login');
}

}
