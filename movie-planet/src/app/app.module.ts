import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ChartComponent } from "./chart/chart.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";

import { Admin1Module } from "./admin1/admin1.module";

// FIREBASE MODULES
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

// ENVIRONMENT MODUL
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
    Admin1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
