import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieUpdateComponent } from "./movie-update/movie-update.component";
import { MovieComponent } from "./movie/movie.component";

import { Admin1RoutingModule } from "./admin1-routing.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieCreateComponent,
    MovieUpdateComponent,
    MovieComponent,
    LoginComponent
  ],
  imports: [CommonModule, Admin1RoutingModule]
})
export class Admin1Module {}
