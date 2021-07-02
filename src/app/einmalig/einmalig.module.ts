import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EinmaligComponent } from './einmalig.component';



@NgModule({
  declarations: [
    EinmaligComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EinmaligComponent
  ]
})
export class EinmaligModule { }
