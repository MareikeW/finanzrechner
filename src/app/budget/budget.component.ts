import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  // Forminputs
  einkommen = new FormControl(0);
  sparen = new FormControl(0);
  wohnen = new FormControl(0);
  energie = new FormControl(0);
  essen = new FormControl(0);
  transport = new FormControl(0);
  kleidung = new FormControl(0);
  erholung = new FormControl(0);
  spenden = new FormControl(0);
  schulden = new FormControl(0);
  sonstiges = new FormControl(0);

  // sonstiges Werte
  differenz: number = 0;
  einnahmen: number = 0;
  ausgaben: number = 0;

  sparBetrag = 0;
  wohnenBetrag = 0;

  constructor() {
    
  }

  berechneDifferenz() {
    this.einnahmen = this.einkommen.value;
    this.ausgaben = this.sparen.value + this.wohnen.value + this.energie.value + this.essen.value + this.transport.value + this.kleidung.value +
                    this.erholung.value + this.spenden.value  + this.schulden.value + this.sonstiges.value;
    this.differenz = this.einnahmen - this.ausgaben;
    this.createBudgetGraph();
    return this.differenz;
  }

  createBudgetGraph() {
    this.sparBetrag = this.sparen.value;
    this.wohnenBetrag = this.wohnen.value;
  }
  
}
