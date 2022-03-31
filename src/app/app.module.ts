import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookFormComponent } from './update-book-form/update-book-form.component';
import { FormsModule } from '@angular/forms';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookListComponent,
    UpdateBookFormComponent,
    AddBookFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
