import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/Produit';
import { GestionProduitService } from '../gestion-produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  produit : Produit = new Produit();
  message: string = "";
  showMessage: boolean = false;
  constructor(private s: GestionProduitService, private router: Router) { }

  ngOnInit(): void {
  }

addProduit() {
  this.produit.dateCreation = new Date();
  this.s.addProduit(this.produit).subscribe(() => {
    this.message = "Produit ajouté avec succès.";
    this.showMessage = true;
    this.router.navigateByUrl("GestionProduits");
    // Réinitialisation des champs
    this.produit = new Produit();
  });
}
/*onFileSelected(event:any) {
  if(event.target.files)
  {


  const file: File = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    this.produit.image = reader.result as string;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
}*/



}
