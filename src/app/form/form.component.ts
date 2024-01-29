import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ImcCalculatorComponent } from '../imc-calculator/imc-calculator.component';
import { FormData } from '../interfaces/form-data';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ImcCalculatorComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() formDataChanged = new EventEmitter<FormData>();

  nombre: string = '';
  sexo: string = '';
  altura: number = 70;
  peso: number = 50;

  increaseHeight(): void {
    this.altura++;
    this.shareData();
  }

  decreaseHeight(): void {
    this.altura--;
    this.shareData();
  }

  increaseWeight(): void {
    this.peso++;
    this.shareData();
  }

  decreaseWeight(): void {
    this.peso--;
    this.shareData();
  }

  shareData(): void {
    const data: FormData = {
      nombre: this.nombre,
      sexo: this.sexo,
      altura: this.altura,
      peso: this.peso,
    };
    this.formDataChanged.emit(data);
  }

  clearForm(): void {
    this.nombre = '';
    this.sexo = '';
    this.altura = 0;
    this.peso = 0;
    this.shareData();
  }
  
}
