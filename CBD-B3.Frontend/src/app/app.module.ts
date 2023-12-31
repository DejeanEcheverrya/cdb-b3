import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorModule } from './calculator/calculator.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent} from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CalculatorModule, 
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
