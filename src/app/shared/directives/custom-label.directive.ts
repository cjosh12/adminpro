import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: true
})
export class CustomLabelDirective {
  private htmlElemnt?: ElementRef<HTMLElement>;
  private _color!:string;
  private _errors? :ValidationErrors | null;

  private elementRef = inject(ElementRef)
  private render = inject(Renderer2);

  @Input()
  set color(value: string){
    this._color = value;
    this.setStyle();
  }

  @Input()
  set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor() {
    this.htmlElemnt = this.elementRef;
  }


  setStyle():void {
    this.render.addClass(this.elementRef.nativeElement, this._color!)
  }

  setErrorMessage():void {
    if ( !this.htmlElemnt ) return;

    if ( !this._errors ){
      this.htmlElemnt.nativeElement.innerText = "";
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElemnt.nativeElement.innerText = "Este campo es Obligatorio!";
      return;
    }

    if(errors.includes('email')){
      this.htmlElemnt.nativeElement.innerText =
        'Este campo debe ser un correo electrónico valido.';
      return;
    }

    if(errors.includes('minlength')){
      const {requiredLength} = this._errors['minlength'];
      this.htmlElemnt.nativeElement.innerText =
        `este campo debe tener mínimo ${requiredLength} caracteres`;
      return;
    }

    if(errors.includes('maxlength')){
      const {requiredLength} = this._errors['maxlength'];
      this.htmlElemnt.nativeElement.innerText =
        `este campo debe tener máximo ${requiredLength} caracteres`;
      return;
    }    

    if (errors.includes('pattern')) {
      const { requiredPattern } = this._errors['pattern'];
      let message = '';

      switch (requiredPattern) {
        case '/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$/':
          message =
            'El campo debe tener al menos una mayúscula, una minúscula, un número y un carácter especial';
          break;

        default:
          break;
      }

      this.htmlElemnt.nativeElement.innerText = message;
      return;
    }
  }
}
