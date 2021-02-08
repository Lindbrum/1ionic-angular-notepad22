import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  { path: '', redirectTo: 'notes', pathMatch: 'full' },

  { path: 'notes', loadChildren: './home/home.module#HomePageModule' },

  { path: 'notes/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'nota',
    loadChildren: () => import('./nota/nota.module').then( m => m.NotaPageModule)
  },
  {
    path: 'modal-notify',
    loadChildren: () => import('./modal-notify/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'modal-notify-check',
    loadChildren: () => import('./modal-check/modal-check.module').then( m => m.ModalCheckPageModule)
  },
  {
    path: 'posix',
    loadChildren: () => import('./posix/posix.module').then( m => m.PosixPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
