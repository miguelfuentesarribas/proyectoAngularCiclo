import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styles: [
    `
    
    `
  ]
})
export class SinginComponent implements OnInit {

  ngOnInit(): void {
  }

  formularioSing: FormGroup = this.fb.group({
    name: ['miguel', [Validators.required, Validators.minLength(3)] ],
    email: ['miguel@hotmail.com', [Validators.required, Validators.email] ],
    password: [ '12345678', [Validators.required, Validators.minLength(8)] ],
    password2: ['12345678', [Validators.required, Validators.minLength(8)]],
    phone: ['682604681',[Validators.required, Validators.minLength(9), Validators.maxLength(9)] ],
  })

  constructor( private fb: FormBuilder,
                private router: Router) { }

  campoEsValido(campo: string) {
    console.log(this.formularioSing.controls[campo].errors);
    
    return this.formularioSing.controls[campo].errors && this.formularioSing.controls[campo].touched;
  }

  singin(){
    console.log(this.formularioSing.value);
    this.router.navigateByUrl('');
  }
}
