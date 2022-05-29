import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './shared/base/base.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component: BaseComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
