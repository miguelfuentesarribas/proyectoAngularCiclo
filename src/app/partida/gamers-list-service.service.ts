import { EventEmitter, Injectable, Output } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class GamersListServiceService {

  listaComoLaQuierasLlamar: Usuario[] = [];


  constructor() { }
}
