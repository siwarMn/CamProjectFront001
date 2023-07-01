import { Component, OnInit } from '@angular/core';
import { Activite } from '../Model/Activite';
import { GestionActiviteService } from '../gestion-activite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-activites',
  templateUrl: './gestion-activites.component.html',
  styleUrls: ['./gestion-activites.component.css']
})
export class GestionActivitesComponent implements OnInit {

  activite : Activite = new Activite();
  message: string = "";
  showMessage: boolean = false;

  constructor(private s: GestionActiviteService, private router: Router) { }

  ngOnInit(): void {
  }

  addActivite(){
    this.activite.DateDebut = new Date();
    this.s.addActivite(this.activite).subscribe(() => {
    this.message = "Activité ajouté avec succès.";
    this.showMessage = true;
    this.router.navigateByUrl("GestionActivite");
    // Réinitialisation des champs
    this.activite = new Activite();
  });
  }

}
