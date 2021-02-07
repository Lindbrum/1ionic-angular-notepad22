import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-modal-check',
  templateUrl: './modal-check.page.html',
  styleUrls: ['./modal-check.page.scss'],
})
export class ModalCheckPage implements OnInit {

  elenco: string[] = [];

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController,
              private modalCtrl: ModalController, private formBuilder: FormBuilder, private storage: Storage) {
  }

/*
  this.myForm = formBuilder.group({
    player1: ['', Validators.required]
  });
  title: any;
  content: any;
  color: string;
  public myForm: FormGroup;
  private playerCount = 1;
  gesf: any;
*/
ngOnInit() {
  }
/*
  salvaDati(){
    this.storage.set('nota', this.elenco);
    console.log(this.elenco);
  }
/*
  removeControl(control) {
        this.myForm.removeControl(control.key);
      }

*/
  addControl() {
    const temp = '';
    this.elenco.push(temp);
  }



close() {
    this.modalCtrl.dismiss();
  }
}

