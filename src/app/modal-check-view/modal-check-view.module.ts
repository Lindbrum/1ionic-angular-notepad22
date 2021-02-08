import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCheckViewPageRoutingModule } from './modal-check-view-routing.module';

import { ModalCheckViewPage } from './modal-check-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCheckViewPageRoutingModule
  ],
  declarations: [ModalCheckViewPage]
})
export class ModalCheckViewPageModule {}
