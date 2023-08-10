import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {InscriptionComponent} from "./pages/inscription/inscription.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {StatistiquesComponent} from "./pages/statistiques/statistiques.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscrire',
    component: InscriptionComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'statistiques',
        component: StatistiquesComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
