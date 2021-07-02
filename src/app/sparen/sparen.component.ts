import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sparen',
  templateUrl: './sparen.component.html',
  styleUrls: ['./sparen.component.css']
})
export class SparenComponent {
  // Forminputs
  anfangskapital = new FormControl(0);
  sparrate = new FormControl(0);
  sparintervall = new FormControl("monatlich");
  zinssatz = new FormControl(0);
  ansparzeit = new FormControl(0);
  ergebnis: number = 0;

  // Weitere Werte
  zinsesZinsAnfangskapital: number = 0;
  zinsesZins: number = 0;

  berechneErgebnis() {
    if (this.sparintervall.value === "monatlich") {
    // Monatliche Einzahlungen am Anfang des Monats
    /* Mit monatlicher Verzinsung
      P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 12. t = 10.
      Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
      Total = [ 5000 (1 + 0.05 / 12) ^ (12 × 10) ] + [ 100 × (((1 + 0.00416)^(12 × 10) - 1) / (0.00416)) × (1 + 0.05 / 12) ]
  	*/
    this.zinsesZinsAnfangskapital = this.anfangskapital.value * ((1 + ((this.zinssatz.value / 100) / 12))**(12 * this.ansparzeit.value));
    this.zinsesZins = this.sparrate.value * (((1 + ((this.zinssatz.value / 100) / 12))**(12 * this.ansparzeit.value) - 1) / ((this.zinssatz.value / 100) / 12)) * (1 + ((this.zinssatz.value / 100) / 12));
    this.ergebnis = this.zinsesZinsAnfangskapital + this.zinsesZins;
    } else if (this.sparintervall.value === "jährlich") {
      // Jährliche Einzahlungen am Anfang des Jahres
    /* Mit jährlicher Verzinsung
      P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 1. t = 10.
      Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
      Total = [ 5000 (1 + 0.05 / 1) ^ (1 × 10) ] + [ 100 × (((1 + 0.00416)^(1 × 10) - 1) / (0.00416)) * (1 + 0.05 / 1) ]
  	*/
    this.zinsesZinsAnfangskapital = this.anfangskapital.value * ((1 + ((this.zinssatz.value / 100) / 1))**(1 * this.ansparzeit.value));
    this.zinsesZins = this.sparrate.value * (((1 + ((this.zinssatz.value / 100) / 1))**(1 * this.ansparzeit.value) - 1) / ((this.zinssatz.value / 100) / 1)) * (1 + ((this.zinssatz.value / 100) / 1));
    this.ergebnis = this.zinsesZinsAnfangskapital + this.zinsesZins;
    }
    
    return this.ergebnis;
  }
}
