import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';

import { BudgetComponent } from './budget.component';
import { BudgetchartComponent } from './budgetchart/budgetchart.component';


@NgModule({
  declarations: [
    BudgetComponent,
    BudgetchartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartModule
  ],
  exports: [
    BudgetComponent
  ]
})
export class BudgetModule { }
