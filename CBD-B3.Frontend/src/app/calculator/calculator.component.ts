import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  investmentAmount: number | undefined;
  redemptionMonths: number | undefined;
  buttonLabel = 'Calcular';

  constructor(
    private http: HttpClient
  ) {
    this.investmentAmount = 0.01;
    this.redemptionMonths = 2;
  }

  
  onSubmit() {
    this.buttonLabel = 'Calculando...';

    const postData = {
      moneyToInvest: this.investmentAmount,
      monthsToRedemption: this.redemptionMonths,
    };

     this.http.post('https://localhost:7020/api/v1/cdb', postData).subscribe({
      next: (response) => {
        console.log(response);
        this.buttonLabel = 'Calcular';
      },
      error: (error) => {
        this.buttonLabel = 'Calcular';
        console.error('Erro na chamada da API:', error);
      }
    });
  }
}
