import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-offcanvas-content',
  template: `
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Navigation</h5>
      <button type="button" class="btn-close text-reset" aria-label="Close" (click)="activeOffcanvas.dismiss('Cross click')"></button>
    </div>
    <div class="offcanvas-body">
    <button mat-menu-item routerLink="/Accueil" (click)="activeOffcanvas.dismiss('Cross click')">
      <span>ACCUEIL</span>
    </button>
    <button mat-menu-item routerLink="/Specialities" (click)="activeOffcanvas.dismiss('Cross click')">
      <span>NOS SPÉCIALITÉS</span>
    </button>
    <button mat-menu-item routerLink="/Blanchiment" (click)="activeOffcanvas.dismiss('Cross click')">
      <span>BLANCHIMENT</span>
    </button>
    <button mat-menu-item routerLink="/Urgence" (click)="activeOffcanvas.dismiss('Cross click')">
      <span>URGENCES</span>
    </button>
    <button mat-menu-item routerLink="/Contact" (click)="activeOffcanvas.dismiss('Cross click')">
      <span>CONTACT</span>
    </button>
    </div>
  `
})
export class SidenaveComponent implements OnInit {

  constructor(public activeOffcanvas: NgbActiveOffcanvas) { }
  @Input() name:any;
  ngOnInit(): void {
  }

}
