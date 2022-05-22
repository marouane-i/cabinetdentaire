import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidenaveComponent } from '../sidenave/sidenave.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  panelOpenState = false;
  constructor(private offcanvasService: NgbOffcanvas) { }
  open() {
    const offcanvasRef = this.offcanvasService.open(SidenaveComponent);
    offcanvasRef.componentInstance.name = 'World';
  }
  ngOnInit(): void {
  }

}
