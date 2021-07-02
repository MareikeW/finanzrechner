import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SparenModule } from './sparen/sparen.module';
import { EinmaligModule } from './einmalig/einmalig.module';
import { BudgetModule } from './budget/budget.module';

import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SparenModule,
    EinmaligModule,
    BudgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
