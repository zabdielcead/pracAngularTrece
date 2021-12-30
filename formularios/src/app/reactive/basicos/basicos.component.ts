import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup =  new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // });


  miFormulario:FormGroup = this.fb.group({
    nombre:['',
               [
                   Validators.required,
                   Validators.minLength(3)
                ] //validadores sincronos
              //validadores asincronos
            ],
    precio:[
        ,
        [  
          Validators.required,
          Validators.min(0)
         ] 
    ],
    existencias:[ ,
                  [
                    Validators.required,
                    Validators.min(0)
                 ]
    ]

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
      this.miFormulario.setValue({
        nombre:'SXW',
        precio: 1600,
        existencias:10
      })

      /*
      si en set value no ponemos todas las propiedades del formulario truena
      para eso podemos usar el reset si no usamos todos loc campos

        this.miFormulario.reset({
        nombre:'SXW',
        precio: 1600,
       
      })
      */

  }

  campoEsValido(campo:string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();// se va campo por campo y lo toca
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
