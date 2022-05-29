import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  formularioLog: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(8)] ],
  })

  constructor( private fb: FormBuilder) { }

  campoEsValido( campo: string) {
    console.log(this.formularioLog.controls[campo].errors);
    
    return this.formularioLog.controls[campo].errors && this.formularioLog.controls[campo].touched;
  }

}
