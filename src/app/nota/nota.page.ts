import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, NavController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalCheckPage} from '../modal-check/modal-check.page';

@Component({
    selector: 'app-nota',
    templateUrl: './nota.page.html',
    styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

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
        this.notesService.load();
    }

// funzione chiamata dal pulsante "salva"
    addNote() {
        this.notesService.createNote(this.title, this.content, this.color);
        this.navCtrl.back();
    }

    // Pulsante per login
    goToLogin() {
        this.navCtrl.navigateRoot('login');
    }

// Apertura modal notifiche
    async showModal() {
        const modal = await this.modalCtrl.create({
            component: ModalPage
        }).then(modals => {
            modals.present();
        });
    }
// Apertura modal elenco check
    async showModal2() {
        const modal = await this.modalCtrl.create({
            component: ModalCheckPage
        }).then(modals => {
            modals.present();
        });
    }

}
