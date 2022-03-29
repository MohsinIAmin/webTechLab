import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books = this.bookService.getBooks();

  ngOnInit(): void {
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBookRow(book);
  }
}
