import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { ConnexionComponent } from './signIn/connexion/connexion.component';
import { InscriptionComponent } from './signIn/inscription/inscription.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ProfilModule } from './signed-in/profil.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    ConnexionComponent,
    InscriptionComponent,
    FooterComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    FormsModule,
    ReactiveFormsModule,
    ProfilModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
