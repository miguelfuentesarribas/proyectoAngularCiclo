import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
  `]
})
export class BaseComponent implements OnInit {

  get usuario() {
    return this.as.usuario
  }

  constructor( private router: Router,
              private as: AuthService) { }

  ngOnInit(): void {
  }

  //recibira el servicio
  isAutenticaded():boolean {
    return false;
  }

  logout() {
    //limpiar el local storage
    console.log(this.usuario);
    
    this.router.navigateByUrl('')
    //isAutenticaded()
  }
}
