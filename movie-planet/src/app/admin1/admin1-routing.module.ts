import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieUpdateComponent } from "./movie-update/movie-update.component";
import { MovieComponent } from "./movie/movie.component";
import { LoginComponent } from "./login/login.component";

import { AdminGuard } from "../guard/admin.guard";

const routes: Routes = [
  {
    path: "admin1",
    component: MovieComponent,
    children: [
      {
        path: "list",
        component: MovieListComponent,
        canActivate: [AdminGuard]
      },
      {
        path: "create",
        component: MovieCreateComponent,
        canActivate: [AdminGuard]
      },
      {
        path: "update",
        component: MovieUpdateComponent,
        canActivate: [AdminGuard]
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin1RoutingModule {}
