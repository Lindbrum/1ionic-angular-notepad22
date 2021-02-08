import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosixPageRoutingModule } from './posix-routing.module';

import { PosixPage } from './posix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosixPageRoutingModule
  ],
  declarations: [PosixPage]
})
export class PosixPageModule {}
