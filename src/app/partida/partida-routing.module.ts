import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from '../shared/base/base.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game/game.component';
import { TimerComponent } from './timer/timer.component';



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
        path: 'timer',
        component: TimerComponent,
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