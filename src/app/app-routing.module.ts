import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { DescargaComponent } from './pages/descarga/descarga.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'rutas', component:RutasComponent},
  {path: 'descarga', component:DescargaComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'perfil', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
