import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {ProductsPageComponent} from "./components/products-page/products-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import {NoteDetailsPageComponent} from "./components/note-details-page/note-details-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'posts', component: ProductsPageComponent },
  { path: 'q', component: NotesListComponent },
  { path: 'new', component: NoteDetailsPageComponent },
  { path: ':id', component: NoteDetailsPageComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
