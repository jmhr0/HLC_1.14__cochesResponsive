import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashPage } from './splash/splash.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
