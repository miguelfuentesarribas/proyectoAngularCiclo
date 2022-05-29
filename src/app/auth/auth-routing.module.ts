import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'singIn',
        component: SinginComponent
      },
      {
        path: '**',
        redirectTo: 'singIn'
      }
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
