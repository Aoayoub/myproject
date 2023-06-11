import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'Models/Utilisateur';
import { UtilisateurService } from 'Services/utilisateur.service';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUtilisateur() {
    this.utilisateurService.createUtilisateur(this.utilisateur).subscribe(data => {
      console.log(data);
      this.goToUtilisateurList();
    },
      error => console.log(error));
  }

  goToUtilisateurList() {
    this.router.navigate(['/utilisateurs']);
  }

  onSubmit() {
    console.log(this.utilisateur);
    this.saveUtilisateur();
  }

}
