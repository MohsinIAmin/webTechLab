import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book-form',
  templateUrl: './update-book-form.component.html',
  styleUrls: ['./update-book-form.component.css']
})
export class UpdateBookFormComponent implements OnInit {

  constructor(private bookService :BookService) { }

  givenBook = this.bookService.getBookToBeUpdated();

  ngOnInit(): void {
  }

}
