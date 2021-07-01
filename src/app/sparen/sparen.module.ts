import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SparenComponent } from './sparen.component';

@NgModule({
  declarations: [
    SparenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SparenComponent
  ]
})
export class SparenModule { }
