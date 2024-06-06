import {Component} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {ResultComponent} from "./components/result/result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    CalculatorComponent,
    ResultComponent
  ],
})
export class AppComponent {
}
