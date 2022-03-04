import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Para realizar requisição HTTP
import { HttpClientModule } from '@angular/common/http';

// importes para angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Componentes do projeto
import { NavComponent } from './componente/nav/nav.component';
import { HomeComponent } from './componente/home/home.component';
import { HeaderComponent } from './componente/header/header.component';
import { TecnicoListComponent } from './componente/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './componente/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TecnicoCreateComponent } from './componente/tecnico/tecnico-create/tecnico-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './componente/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './componente/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteCreateComponent } from './componente/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './componente/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './componente/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './componente/cliente/cliente-update/cliente-update.component';
import { ChamadoListComponent } from './componente/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './componente/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './componente/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './componente/chamado/chamado-read/chamado-read.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    TecnicoListComponent,
    LoginComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteListComponent,
    ClienteUpdateComponent,
    ChamadoListComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisição http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()

  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
