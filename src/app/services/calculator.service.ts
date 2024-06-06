import {Injectable, signal} from '@angular/core';
import {type CalculData} from '../components/calculator/calcul.model';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  resultData = signal<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined>(undefined);


  calculateInvestmentResults(calculData: CalculData) {
    const annualData = [];
    let investmentValue = calculData.initialInvestment;

    for (let i = 0; i < calculData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (calculData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + calculData.annualInvestment;
      const totalInterest =
        investmentValue - calculData.annualInvestment * year - calculData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: calculData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: calculData.initialInvestment + calculData.annualInvestment * year,
      });
    }
    this.resultData.set(annualData);
  }
}
