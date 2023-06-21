import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"GestionProduits",component:GestionProduitsComponent},
  {path:"home",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
