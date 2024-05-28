import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../service/author.service';
import { Author } from '../model/Author';

@Component({
  selector: 'app-author-table',
  standalone: true,
  imports: [],
  templateUrl: './author-table.component.html',
  styleUrl: './author-table.component.css'
})
export class AuthorTableComponent implements OnInit {

  listAuthors: Author[]

  constructor(private authorService : AuthorService){
    this.listAuthors=[]
  }

    ngOnInit(): void {
      this.authorService.getAuthors().subscribe(data => {
          this.listAuthors = data
          console.log(this.listAuthors)
      })
    }
    


}
