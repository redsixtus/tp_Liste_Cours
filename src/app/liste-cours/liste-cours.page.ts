import { Component, OnInit } from '@angular/core';
import { ModelCours } from '../cours/model';
import { CoursServiceService } from '../services/cours-service.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.page.html',
  styleUrls: ['./liste-cours.page.scss'],
})
export class ListeCoursPage implements OnInit {


  listeCours!: ModelCours[];
  searchnom = '';



  cours!: ModelCours;

  title = 'Liste des Cours';

  constructor(private servicecours: CoursServiceService) { }

  search() {
      if(this.searchnom && this.searchnom !== '')
      {
        this.servicecours.findAll().
        subscribe(listeC => {

          this.listeCours = listeC.filter(
            data => data.nom.toUpperCase() ===
            this.searchnom.toUpperCase()
          );

        });

      }else{
        this.servicecours.findAll().subscribe(()=> this.ngOnInit());
      }
    }

  ngOnInit(){
    this.cours = new ModelCours();
    this.servicecours.findAll().
    subscribe(listeC => this.listeCours = listeC );
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  ajout(c: ModelCours) {

    this.servicecours.add(c).subscribe(()=> this.ngOnInit());
  }


  update(c: ModelCours) {

    this.servicecours.update(c).subscribe(()=> this.ngOnInit());
  }
  delete(c: ModelCours){
    this.servicecours.delete(c).subscribe(()=> this.ngOnInit());
  }
}
