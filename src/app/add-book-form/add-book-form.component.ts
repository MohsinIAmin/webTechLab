import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../Books';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  newBook = new Book();

  ngOnInit(): void {
  }

  addBook(): void {
    this.bookService.addBook(this.newBook);
    this.router.navigate(['book']);
  }

}
