import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'resultado', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
