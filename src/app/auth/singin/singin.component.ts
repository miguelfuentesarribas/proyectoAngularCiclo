import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    name: ['', [Validators.required, Validators.minLength(3)] ],
    email: ['', [Validators.required, Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(8)] ],
    phone: ['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)] ],
  })

  constructor( private fb: FormBuilder) { }

}
