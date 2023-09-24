import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  investmentAmount: number | undefined;
  redemptionMonths: number | undefined;

  constructor() {
    this.investmentAmount = 0.01;
    this.redemptionMonths = 2;
  }

  onSubmit() {
    // Implement the logic to send the values to the API and handle the API response here
    console.log('Investment Amount (Reais):', this.investmentAmount);
    console.log('Redemption Months:', this.redemptionMonths);
  }
}
