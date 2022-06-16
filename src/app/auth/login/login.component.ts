import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  formularioLog: FormGroup = this.fb.group({
    email: ['manuelo@hotmail.es', [Validators.required, Validators.email] ],
    password: [ '123456489', [Validators.required, Validators.minLength(8)] ],
  })

  constructor( private fb: FormBuilder,
                private router: Router,
                private as: AuthService) { }

  campoEsValido(campo: string) {
    console.log(this.formularioLog.controls[campo].errors);
    
    return this.formularioLog.controls[campo].errors && this.formularioLog.controls[campo].touched;
  }

  login() {
    console.log(this.formularioLog.value);
    const { email, password } = this.formularioLog.value
    this.as.login(email, password)
    .subscribe(ok => {
      console.log(ok);
      
        if ( ok === true ) {
          this.router.navigateByUrl('/game/createGame');
        } else {
          alert(ok)
        }
    });
    
  }
}
