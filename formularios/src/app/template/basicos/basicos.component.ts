import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
/*

casi tida ka carga en el formulario html
*/

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTC',
    precio:10,
    existencia: 10
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
    console.log('submit hecho', this.miFormulario);
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      producto:'',
      precio: 0,
      existencia: 0
    });

    
  }


  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid &&  
    this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.touched &&
    this.miFormulario?.controls.precio?.value < 0;
            
  }

}
