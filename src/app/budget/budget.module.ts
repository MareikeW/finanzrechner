import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BudgetComponent } from './budget.component';
import { BudgetchartComponent } from './budgetchart/budgetchart.component';


@NgModule({
  declarations: [
    BudgetComponent,
    BudgetchartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BudgetComponent
  ]
})
export class BudgetModule { }
