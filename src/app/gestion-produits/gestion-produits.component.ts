import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/Produit';
import { GestionProduitService } from '../gestion-produit.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as d3 from 'd3';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  produit : Produit = new Produit();
  message: string = "";
  showMessage: boolean = false;
  userFile :any;
  imgURL: any;
  selectedFile!: File ;
  produits: Produit[] = []; // Liste des produits
  showModal: boolean = true;
  produitSelectionne!: Produit;
  constructor(private s: GestionProduitService, private router: Router) {
    this.getProduits();
  }

  ngOnInit(): void {
  }
  openModifierProduitModal(produit: Produit): void {

    this.produitSelectionne = produit;
    this.showModal = true;
    console.log('Produit ajouté avec succès', produit , this.showModal);
  }

  //Gets called when the user selects an image
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onFileSelectedd(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.produitSelectionne.image = reader.result as string;
      };
    }
  }

  updateProduit() {
    this.s.updateProd(this.produitSelectionne)
    .subscribe(
      response => {
        this.showModal = false;
        this.getProduits();

        // Réinitialiser les valeurs des champs ou rediriger vers une autre page
      },
      error => {
        this.message = "Erreur lors de modif du produit";
      }
    );
    this.produit = new Produit();

  }
  addProduit() {
    this.s.addProduit(this.selectedFile, this.produit)
      .subscribe(
        response => {
          this.showMessage =true;
          this.message = "Produit ajouté avec succès";
          this.getProduits();
          // Réinitialiser les valeurs des champs ou rediriger vers une autre page
        },
        error => {
          this.message = "Erreur lors de l\'ajout du produit";
        }
      );
      this.produit = new Produit();
  }


  getProduits() {
    // Appeler votre service pour récupérer les produits avec les images
    this.s.getProduitsAvecImages().subscribe((data: Produit[]) => {
      this.produits = data;
    });
  }

  DeleteProd(IdProduit: number) :void{
    if (!isNaN(IdProduit)) {
    this.s.deleteProduct(IdProduit)
      .subscribe(
        response => {
          this.getProduits();
          // Réinitialiser les valeurs des champs ou rediriger vers une autre page
        },
        error => {
          this.message = "Erreur lors de l\'ajout du produit";
        }
      );
    } else {
      console.error('ID de produit invalide');
      // Affichez un message d'erreur approprié à l'utilisateur
    }
  }


}
