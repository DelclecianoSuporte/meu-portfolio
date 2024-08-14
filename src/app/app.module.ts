import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SobreComponent } from './sobre/sobre.component';
import { StacksComponent } from './stacks/stacks.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    SobreComponent,
    StacksComponent,
    ProjetosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})

export class AppModule { }