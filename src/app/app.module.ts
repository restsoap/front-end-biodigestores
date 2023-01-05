import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatabioComponent } from './components/databio/databio.component';
import { VerbioComponent } from './components/databio/verbio/verbio.component';
import { AgregarEditarBiodComponent } from './components/databio/agregar-editar-biod/agregar-editar-biod.component';
import { DataextComponent } from './components/dataext/dataext.component';
import { VerextComponent } from './components/dataext/verext/verext.component';
import { AgregarEditarExtComponent } from './components/dataext/agregar-editar-ext/agregar-editar-ext.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    DatabioComponent,
    VerbioComponent,
    AgregarEditarBiodComponent,
    DataextComponent,
    VerextComponent,
    AgregarEditarExtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
