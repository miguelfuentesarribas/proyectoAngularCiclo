import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { GamersListServiceService } from '../gamers-list-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  gamerList: Usuario[] = [];
  constructor(private gls: GamersListServiceService) { }

  ngOnInit(): void {
  this.gamerList = this.gls.listaComoLaQuierasLlamar;
  
  }


}
