import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparenComponent } from './sparen/sparen.component';
import { EinmaligComponent } from './einmalig/einmalig.component';
import { BudgetComponent } from './budget/budget.component';
import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    SparenComponent,
    EinmaligComponent,
    BudgetComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
