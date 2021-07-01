import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SparenComponent } from './sparen/sparen.component';
import { EinmaligComponent } from './einmalig/einmalig.component';
import { BudgetComponent } from './budget/budget.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" }, // default path
  { path: "", component: StartseiteComponent },
  { path: "sparrechner", component: SparenComponent },
  { path: "einmalige_anlage", component: EinmaligComponent },
  { path: "budgetplaner", component: BudgetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
