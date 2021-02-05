import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCheckPageRoutingModule } from './modal-check-routing.module';

import { ModalCheckPage } from './modal-check.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModalCheckPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ModalCheckPage]
})
export class ModalCheckPageModule {}
