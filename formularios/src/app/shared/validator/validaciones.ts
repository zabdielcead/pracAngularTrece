import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


export const noPuedeSerStrider = (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();
    console.log(control.value);

    if(valor === 'strider'){
        //esto es un error
        return {
          noStrider: true // manda error
        }
    }
      return null; // esta bien 

  }