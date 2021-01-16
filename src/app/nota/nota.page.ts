import { Component, OnInit } from '@angular/core';
import {NotesService} from '../services/notes.service';
import {AlertController, NavController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-nota',
    templateUrl: './nota.page.html',
    styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

    constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController,
                private modalCtrl: ModalController, private formBuilder: FormBuilder ) {






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










    addControl(){
        this.playerCount++;
        this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
    }

    removeControl(control){
        this.myForm.removeControl(control.key);
    }

}
