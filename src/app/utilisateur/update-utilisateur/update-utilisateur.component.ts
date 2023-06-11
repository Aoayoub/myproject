import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'Models/Utilisateur';
import { UtilisateurService } from 'Services/utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {
  id: number;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.utilisateurService.getUtilisateurById(this.id).subscribe(data => {
      this.utilisateur = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.utilisateurService.updateUtilisateur(this.id, this.utilisateur).subscribe(data => {
      this.goToUtilisateurList();
    }
      , error => console.log(error));
  }

  goToUtilisateurList() {
    this.router.navigate(['/utilisateurs']);
  }

}
