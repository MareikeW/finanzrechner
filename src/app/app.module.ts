import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SparenModule } from './sparen/sparen.module';

import { AppComponent } from './app.component';
import { EinmaligComponent } from './einmalig/einmalig.component';
import { BudgetComponent } from './budget/budget.component';
import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    EinmaligComponent,
    BudgetComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SparenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
