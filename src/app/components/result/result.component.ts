import {Component, computed, inject} from '@angular/core';
import {CalculatorService} from "../../services/calculator.service";
import {CurrencyPipe} from "@angular/common";


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  private investmentService = inject(CalculatorService);

  results = computed(() => this.investmentService.resultData());


}
