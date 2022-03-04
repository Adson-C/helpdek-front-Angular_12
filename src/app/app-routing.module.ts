import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './componente/login/login.component';
import { NavComponent } from './componente/nav/nav.component';
import { TecnicoListComponent } from './componente/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoCreateComponent } from './componente/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './componente/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './componente/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './componente/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './componente/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './componente/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './componente/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './componente/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './componente/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './componente/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './componente/chamado/chamado-read/chamado-read.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent }, // rota filha componente nav

      { path: 'tecnicos', component: TecnicoListComponent },
      { path: 'tecnicos/create', component: TecnicoCreateComponent },
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/create', component: ClienteCreateComponent },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent },


      { path: 'chamados', component: ChamadoListComponent },
      { path: 'chamados/create', component: ChamadoCreateComponent },
      { path: 'chamados/update/:id', component: ChamadoUpdateComponent },
      { path: 'chamados/read/:id', component: ChamadoReadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
