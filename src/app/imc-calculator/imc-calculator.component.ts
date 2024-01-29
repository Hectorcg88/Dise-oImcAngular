import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgFor, NgIf } from '@angular/common';
import { FormData } from '../interfaces/form-data';
import { Result } from '../interfaces/result';

@Component({
  selector: 'app-imc-calculator',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './imc-calculator.component.html',
  styleUrl: './imc-calculator.component.css'
})
export class ImcCalculatorComponent {
  @Input() formData?: FormData;
  imc: number = 0;
  historial: Result[] = [];

  calcularIMC(): void {
    if (this.formData && this.formData.peso && this.formData.altura) {
      const { peso, altura }: {peso:number, altura:number}  = this.formData;
      const alturaMetros: number = altura / 100;
      this.imc = peso / (alturaMetros * alturaMetros);

      const resultado: Result = {
        nombre: this.formData.nombre,
        imc: this.imc,
        estado: this.imcStats(this.imc),
      };

      this.historial.push(resultado);
    } else {
      console.error("Insufficient data to calculate IMC");
    }
  }

  imcStats(imc: number): string {
    if (imc < 18.5) {
      return "Underweight";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Normal";
    } else {
      return "Overweight";
    }
  }
}
