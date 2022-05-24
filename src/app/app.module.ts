import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './pages/main/main.component';
import { UrgencesComponent } from './components/urgences/urgences.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenaveComponent } from './components/sidenave/sidenave.component';
import { RouterModule } from '@angular/router';
import { BlanchimentComponent } from './components/blanchiment/blanchiment.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    AccueilComponent,
    MainComponent,
    UrgencesComponent,
    SidenaveComponent,
    BlanchimentComponent,
    ContactComponent
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    FontAwesomeModule,
    FormsModule,
    MatSidenavModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'Accueil',component:AccueilComponent},
      {path:'Urgence',component:UrgencesComponent},
      {path:'Blanchiment',component:BlanchimentComponent},
      {path:'Contact',component:ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
