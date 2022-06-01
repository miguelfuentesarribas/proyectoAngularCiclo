import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './create-game/create-game.component';
import { PartidaRoutingModule } from './partida-routing.module';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    CreateGameComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PartidaRoutingModule
  ],
  exports: [
    PartidaRoutingModule
  ]
})
export class PartidaModule { }
