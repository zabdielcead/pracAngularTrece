import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({

    genero:['M', Validators.required],
    notificaciones: ['M', Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });


  persona = {
    genero: 'F',
    notificaciones:true,
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona, 
      condiciones:false
    });


    //https://angular.io/guide/reactive-forms

    
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue => {
    //   console.log('newValue', newValue);
    // });

    this.miFormulario.valueChanges.subscribe(({condiciones, ...restoDeArgumentos}) => {
        //delete form.condiciones;
        //console.log(form)
        this.persona = restoDeArgumentos;
    });

  }


  guardar(){
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    console.log(formValue);
    this.persona = formValue;

  }

}
