import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosixPage } from './posix.page';

const routes: Routes = [
  {
    path: '',
    component: PosixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosixPageRoutingModule {}
