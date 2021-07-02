import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BudgetComponent } from './budget.component';


@NgModule({
  declarations: [
    BudgetComponent
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
