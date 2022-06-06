import { Component, OnInit } from '@angular/core';
import { faCapsules, faCertificate, faDna, faIdBadge, faMedkit, faSyringe, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  
  faMedkit = faMedkit;
  faTooth = faTooth;
  faUserMd = faUserMd;
  faDna = faDna;
  faSyringe = faSyringe;
  faIdBadge = faIdBadge
  faCapsules = faCapsules;
  faCertificate = faCertificate;
  constructor() { }

  ngOnInit(): void {
  }

}
