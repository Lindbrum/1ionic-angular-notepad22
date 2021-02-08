import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-check-view',
  templateUrl: './modal-check-view.page.html',
  styleUrls: ['./modal-check-view.page.scss'],
})
export class ModalCheckViewPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
