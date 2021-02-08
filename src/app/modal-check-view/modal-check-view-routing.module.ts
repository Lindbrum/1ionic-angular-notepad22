import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCheckViewPage } from './modal-check-view.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCheckViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCheckViewPageRoutingModule {}
