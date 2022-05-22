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
    <button mat-menu-item>
      <span>ACCUEIL</span>
    </button>
    <button mat-menu-item>
      <span>NOS SPÉCIALITÉS</span>
    </button>
    <button mat-menu-item>
      <span>BLANCHIMENT</span>
    </button>
    <button mat-menu-item>
      <span>URGENCES</span>
    </button>
    <button mat-menu-item>
      <span>CONTACT</span>
    </button>
    <button mat-menu-item>
      <span>TÉMOIGNAGES</span>
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
