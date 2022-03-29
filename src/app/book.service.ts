import { Injectable } from '@angular/core';
import { Book } from './Books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    { id: 1, name: "Teach Yourself C", year: 2004, availability: true },
    { id: 2, name: "Software Engineering", year: 2021, availability: false },
    { id: 3, name: "Computer and Internet Security", year: 2013, availability: true },
    { id: 4, name: "Database Management System", year: 2010, availability: true },
    { id: 5, name: "Artificial Intelligence", year: 2020, availability: true },
    { id: 6, name: "Java Programming", year: 1998, availability: true },
  ]
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  deleteBookRow(book: Book): void {
    this.books.splice(this.books.indexOf(book), 1);
  }
}
