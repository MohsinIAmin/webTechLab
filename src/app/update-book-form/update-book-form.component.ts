import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book-form',
  templateUrl: './update-book-form.component.html',
  styleUrls: ['./update-book-form.component.css']
})
export class UpdateBookFormComponent implements OnInit {

  constructor(private bookService :BookService, private router:Router) { }

  givenBook = this.bookService.getBookToBeUpdated();

  ngOnInit(): void {
  }

  updateBook():void {
    console.log(this.givenBook);
    this.bookService.updateBook(this.givenBook);
    this.router.navigate(['book']);
  }

}
