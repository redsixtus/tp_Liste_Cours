import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelCours } from '../cours/model';
import { CoursServiceService } from '../services/cours-service.service';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})
export class SaisieCoursPage implements OnInit {

  @Input() couramodifie !: ModelCours;

  saisieform!: FormGroup;

  nom01!: FormControl;
  prof01!: FormControl;
  nbeleve01!: FormControl;

  constructor(private service: CoursServiceService ,private route: Router,private fb: FormBuilder) { }


  ngOnInit() {

     if(this.couramodifie) {
      this.nom01 = this.fb.control(this.couramodifie.nom,Validators.required);
      this.prof01 = this.fb.control(this.couramodifie.professeur,Validators.required);
      this.nbeleve01 = this.fb.control(this.couramodifie.nbEleves,Validators.required);
     }
     else{
      this.nom01 = this.fb.control('',Validators.required);
      this.prof01 = this.fb.control('',Validators.required);
      this.nbeleve01 = this.fb.control('',Validators.required);
     }
    this.saisieform = this.fb.group({
      nom : this.nom01,
      prof : this.prof01,
      nbel : this.nbeleve01
    });
  }

  onSubmit() {
    if(this.saisieform.valid) {
      const c = new ModelCours();
      c.nom = this.nom01.value;
      c.professeur = this.prof01.value;
      c.nbEleves = this.nbeleve01.value;

       if(this.couramodifie) {
        c.id = this.couramodifie.id;
        this.service.update(c).subscribe(
          () => this.route.navigate(['/liste-cours']) );
       }
       else{
        this.service.add(c).subscribe(
          () => this.route.navigate(['/liste-cours']) );
      }

    }
  }
}



