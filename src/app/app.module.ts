import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Paciente/listar/listar.component';
import { AddComponent } from './Paciente/add/add.component';
import { EditComponent } from './Paciente/edit/edit.component';

import { ListarCitaComponent } from './Cita/listarcitas/listar-cita.component';
import { AddCitaComponent } from './Cita/addcita/add-cita.component';
import { EditCitaComponent } from './Cita/editcita/edit-cita.component';
import{ FormsModule } from '@angular/forms'
import { ServiceService } from './Service/service.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarCitaComponent,
    AddCitaComponent,
    EditCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    ServiceService
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
