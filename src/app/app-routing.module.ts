import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import {GestionLieuCentreComponent} from "./gestion-lieu-centre/gestion-lieu-centre.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"GestionProduits",component:GestionProduitsComponent},
  {path:"graphProducts",component:GraphComponent},
  {path:"home",component:AppComponent},
  {path: "GestionEspaces", component:GestionLieuCentreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
