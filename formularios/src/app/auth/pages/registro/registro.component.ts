import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  // nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-Z]+)';
  // emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  

  // echamos andar los json json-server --watch db.json
 
  miFormulario:FormGroup = this.fb.group({
    nombre: ['' , [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:  ['' , [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['' , [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['' , [Validators.required, Validators.minLength(6)]],
    password2: ['' , [Validators.required, Validators.minLength(6)]]
  },{
    validators: [ this.vs.camposIguales('password', 'password2')]
  })


 
  constructor(private fb: FormBuilder, private vs:ValidatorService, private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'FERNANDO HERRERA',
      email: 'test@gmail.com'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }


  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors
     
    if (errors?.required){
      return 'Email es obligatorio';
    }else if(errors?.pattern){
      return 'el valor ingresado no tiene formato de correo';
    }else if(errors?.emailTomado){
      return 'el email ya fue tomado';
    }

    return '';
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  // }


}
