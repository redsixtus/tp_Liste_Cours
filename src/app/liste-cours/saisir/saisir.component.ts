import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelCours } from 'src/app/cours/model';

@Component({
  selector: 'app-saisir',
  templateUrl: './saisir.component.html',
  styleUrls: ['./saisir.component.scss'],
})
export class SaisirComponent implements OnInit {
  @Input() couramodifie !: ModelCours;

  @Output() onajout: EventEmitter<ModelCours> =
    new EventEmitter<ModelCours>();

  cours: ModelCours = new ModelCours();

  constructor() { }

  ngOnInit() {

    if(this.couramodifie) {

      this.cours = this.couramodifie;
    }
  }


  ajout(c: ModelCours): void {
    this.onajout.emit(c);
  }

}
