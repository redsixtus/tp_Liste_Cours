import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCoursPageRoutingModule } from './liste-cours-routing.module';

import { ListeCoursPage } from './liste-cours.page';
import { SaisirComponent } from './saisir/saisir.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCoursPageRoutingModule
  ],
  declarations: [ListeCoursPage,SaisirComponent]
})
export class ListeCoursPageModule {}
