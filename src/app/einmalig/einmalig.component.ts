import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-einmalig',
  templateUrl: './einmalig.component.html',
  styleUrls: ['./einmalig.component.css']
})
export class EinmaligComponent {

  // Forminputs
  anfangskapital = new FormControl(0);
  zinssatz = new FormControl(0);
  ansparzeit = new FormControl(0);
  ergebnis: number = 0;

  berechneErgebnis() {
    this.ergebnis = this.anfangskapital.value * (1 + (this.zinssatz.value / 100))**(this.ansparzeit.value);
    
    return this.ergebnis;
  }
}
