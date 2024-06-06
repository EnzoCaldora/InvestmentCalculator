import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CalculatorService} from "../../services/calculator.service";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');

  constructor(private calculatorService: CalculatorService) {
  }


  onSubmit() {
    this.calculatorService.calculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredExpectedReturn(),
        duration: +this.enteredDuration()
      }
    );
    this.enteredInitialInvestment.set('');
    this.enteredAnnualInvestment.set('');
    this.enteredExpectedReturn.set('');
    this.enteredDuration.set('');
  }
}
