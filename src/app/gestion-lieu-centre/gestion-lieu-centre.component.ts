import { Component, OnInit } from '@angular/core';
import {Produit} from "../Model/Produit";
import {LieuCentre} from "../Model/LieuCentre";
import {GestionProduitService} from "../gestion-produit.service";
import {Router} from "@angular/router";
import {GestionEspaceService} from "../gestion-espace.service";

@Component({
  selector: 'app-gestion-lieu-centre',
  templateUrl: './gestion-lieu-centre.component.html',
  styleUrls: ['./gestion-lieu-centre.component.css']
})
export class GestionLieuCentreComponent implements OnInit {
  centre : LieuCentre = new LieuCentre();
  message: string = "";
  showMessage: boolean = false;

  userFile :any;
  imgURL: any;

  selectedFile!: File ;
  centres: LieuCentre[] = []; // Liste des centres

  showModal: boolean = true;
  centreSelectionne!: LieuCentre;

  constructor(private s: GestionEspaceService, private router: Router) {
    this.getEspaces();
  }

  ngOnInit(): void {


  }

  openModifierEspaceModal(espace: LieuCentre): void {

    this.centreSelectionne = espace;
    this.showModal = true;
    console.log('Espace ajouté avec succès', espace , this.showModal);
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onFileSelectedd(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.centreSelectionne.image = reader.result as string;
      };
    }
  }


  updateEspace() {
    this.s.updateEspace(this.centreSelectionne)
      .subscribe(
        response => {
          this.showModal = false;
          this.getEspaces();

          // Réinitialiser les valeurs des champs ou rediriger vers une autre page
        },
        error => {
          this.message = "Erreur lors de modif du produit";
        }
      );
    this.centre = new LieuCentre();

  }

  addEspace() {
    this.s.addEspace(this.selectedFile, this.centre)
      .subscribe(
        response => {
          this.showMessage =true;
          this.message = "Produit ajouté avec succès";
          this.getEspaces();
          // Réinitialiser les valeurs des champs ou rediriger vers une autre page
        },
        error => {
          this.message = "Erreur lors de l\'ajout du produit";
        }
      );
    this.centre = new LieuCentre();
  }
  getEspaces() {
    // Appeler votre service pour récupérer les produits avec les images
    this.s.getEspaceImage().subscribe((data: LieuCentre[]) => {
      this.centres = data;
    });
  }


  DeleteEspace(IdEspace: number) :void{
    if (!isNaN(IdEspace)) {
      this.s.deleteEspace(IdEspace)
        .subscribe(
          response => {
            this.getEspaces();
            // Réinitialiser les valeurs des champs ou rediriger vers une autre page
          },
          error => {
            this.message = "Erreur lors de l\'ajout de l'espace";
          }
        );
    } else {
      console.error('ID de espace invalide');
      // Affichez un message d'erreur approprié à l'utilisateur
    }
  }

}
