import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ImcCalculatorComponent } from './imc-calculator/imc-calculator.component';
import { FormData } from './interfaces/form-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent, ImcCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formData?: FormData;

  updateFormData(data: FormData) {
    this.formData = data;
  }
}
