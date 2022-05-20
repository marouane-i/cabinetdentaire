import { Component, OnInit } from '@angular/core';
import { faCapsules, faCertificate, faDna, faIdBadge, faMedkit, faSyringe, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

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
