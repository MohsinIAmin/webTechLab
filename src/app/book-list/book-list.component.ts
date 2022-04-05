import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../Books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  books = this.bookService.getBooks();

  ngOnInit(): void {
  }

  deleteBook(book: Book): void {
    this.books = this.bookService.deleteBookRow(book);
  }

  updateBook(book: Book, i: number): void {
    this.bookService.setBookToBeUpdated(book, i);
    this.router.navigate(['updateForm']);
  }
}
