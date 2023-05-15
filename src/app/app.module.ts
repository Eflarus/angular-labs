import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import {MatIconModule} from "@angular/material/icon";
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteDetailsPageComponent } from './components/note-details-page/note-details-page.component';
import {CdkDrag, CdkDragPlaceholder, CdkDropList} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    LoginPageComponent,
    HeaderComponent,
    LoginFormComponent,
    ProductCardComponent,
    NavbarComponent,
    HomePageComponent,
    NotesListComponent,
    NoteCardComponent,
    NoteDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    FormsModule,
    MatIconModule,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
