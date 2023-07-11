import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { GraphComponent } from './graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GestionLieuCentreComponent } from './gestion-lieu-centre/gestion-lieu-centre.component';
@NgModule({
  declarations: [
    AppComponent,
    GestionProduitsComponent,
    GraphComponent,
    GestionLieuCentreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    NgxChartsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
