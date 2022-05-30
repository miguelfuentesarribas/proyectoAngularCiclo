import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from '../shared/base/base.component';
import { CreateGameComponent } from './create-game/create-game.component';



const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'createGame',
        component: CreateGameComponent
      },
      {
        path: '**',
        redirectTo: 'crerateGame'
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
export class PartidaRoutingModule { }