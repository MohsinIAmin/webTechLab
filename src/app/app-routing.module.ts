import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookFormComponent } from './update-book-form/update-book-form.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book', component: BookListComponent },
  { path: 'updateForm', component: UpdateBookFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
