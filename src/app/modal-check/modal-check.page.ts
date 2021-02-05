import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-check',
  templateUrl: './modal-check.page.html',
  styleUrls: ['./modal-check.page.scss'],
})
export class ModalCheckPage implements OnInit {


  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController,
              private modalCtrl: ModalController, private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      player1: ['', Validators.required]
    });
  }

  title: any;
  content: any;
  color: string;
  public myForm: FormGroup;
  private playerCount = 1;
  gesf: any;

  ngOnInit() {
  }

  removeControl(control) {
        this.myForm.removeControl(control.key);
      }

  addControl() {
    this.playerCount++;
    this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
  }
}

