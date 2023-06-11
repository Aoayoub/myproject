import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'Models/Utilisateur';
import { UtilisateurService } from 'Services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
  utilisateurs: Utilisateur[];

  constructor(private utilisateurService: UtilisateurService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  private getUtilisateurs() {
    this.utilisateurService.getUtilisateurList().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  utilisateurDetails(id: number) {
    this.router.navigate(['utilisateur-details', id]);
  }

  updateUtilisateur(id: number) {
    this.router.navigate(['update-utilisateur', id]);
  }

  deleteUtilisateur(id: number) {
    this.utilisateurService.deleteUtilisateur(id).subscribe(data => {
      console.log(data);
      this.getUtilisateurs();
    })
  }

}
