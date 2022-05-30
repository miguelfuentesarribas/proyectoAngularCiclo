import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }


  //recibira el servicio
  isAutenticaded():boolean {
    return false;
  }

}
