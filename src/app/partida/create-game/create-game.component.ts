import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { GamersListServiceService } from '../gamers-list-service.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
})
export class CreateGameComponent implements OnInit {

  get usuario() {
    return this.as.usuario
  }


  // cambiar objet por interfaz e implementar servicio
  listaUsuarios: Usuario[] = [
    {
        _id: "627836957ec7e5f30649c7dc",
        name: "angela64",
        email: "angela46@hotmail.es",
        password: "$2a$10$o43MljEYSYdpvklgIj1FiuE43eQgCPqODfcH4V0b0cDQ4pScnONmS",
        mobile: "987654571",
        admin: false,
        profilePic: "none",
        "__v": 0
    },
    {
        _id: "6278370844dec0038b98bdfa",
        name: "angela645",
        email: "angela465@hotmail.es",
        password: "$2a$10$gwtjS0AShFiBgCOjpj/kjuQFZzFFq355GGh3BXzhqsb8QH4JyU7O6",
        mobile: "987654571",
        admin: false,
        profilePic: "none",
        "__v": 0
    },
    {
        _id: "627837226c82e72dc258cad7",
        name: "angela6455",
        email: "angela4655@hotmail.es",
        password: "$2a$10$wzii9.m2jqih2ONBjXx/p.1iu4R/z/WVRhTn1QTgYSW5gTPvnNc9e",
        mobile: "987654571",
        admin: false,
        profilePic: "none",
        "__v": 0
    },
    {
        _id: "6285f7de218315a1aa0eddd0",
        name: "manuel",
        email: "manuel@hotmail.es",
        password: "$2a$10$23Jrsfa3tz6jNSfdLy7fIeyWeSGQJZGBz0lO7umrH.ERys79LXONy",
        mobile: "987654571",
        admin: true,
        profilePic: "none",
        "__v": 0
    },
    {
        _id: "6286320618e89d7a2733e41f",
        name: "manuelo",
        email: "manuelo@hotmail.es",
        password: "$2a$10$LeZRSDT62j8H3YIZhDkWre/cORxbJndSpBEvOiG5pWFUxA8z4J32W",
        mobile: "987654571",
        admin: true,
        profilePic: "none",
        "__v": 0
    },
    {
        _id: "62863948dcba0182e41e7630",
        name: "manuelo00",
        email: "manuelo00@hotmail.es",
        password: "$2a$10$eegqbMd3vABICcm0..cjMOFrzwDxMTuC2RDsrcW8I8NDx17.IfMTW",
        mobile: "987654571",
        admin: false,
        profilePic: "none",
        "__v": 0
    }
];

listaJugadores: Usuario[] = []



  constructor(private gls: GamersListServiceService,
              private as: AuthService) { }

  ngOnInit(): void {
  }

  guardarJugador(usuario: Usuario) {
    if (this.listaJugadores.includes(usuario)) {
      this.listaJugadores.splice(this.listaJugadores.indexOf(usuario,0),1);
    } else {
      this.listaJugadores.push(usuario);
    }
  }

  crearLista(lista: Usuario[]){
    console.log(lista);
    this.gls.listaComoLaQuierasLlamar = lista;
  }
}
