import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public mesCours: any;

  constructor() {
    this.mesCours = [
        {
          nom: 'Cours 01',
          nbtud: 50
        },
        {
          nom: 'Cours 02',
          nbtud: 100
        }
    ];
   }

  ngOnInit() {
  }

}
