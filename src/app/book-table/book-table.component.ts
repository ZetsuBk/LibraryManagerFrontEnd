import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  listBooks: Book[]

  constructor(private bookService : BookService){
    this.listBooks=[]
  }

    ngOnInit(): void {
      this.bookService.getBooks().subscribe(data => {
          this.listBooks = data
          console.log(this.listBooks)
      })
    }
}
