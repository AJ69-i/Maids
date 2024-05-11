import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "cards" , pathMatch: "full"
  },
  {
    path: "cards", loadChildren : () => import("./pages/cards/cards.module").then( (m) => m.CardsModule )
  },
  {
    path: "**", redirectTo: "cards" , pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
