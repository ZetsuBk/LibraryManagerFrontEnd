import { Component, Input, OnInit } from '@angular/core';
import { AuthorTableComponent } from "../author-table/author-table.component";
import { NgIf } from '@angular/common';
import { BookTableComponent } from "../book-table/book-table.component";
import { UploadComponent } from "../upload/upload.component";
import { HomeComponent } from "../home/home.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [AuthorTableComponent, NgIf, BookTableComponent, UploadComponent, HomeComponent]
})
export class BodyComponent implements OnInit {
  listAuthors = ["authors","books","upload"]
  @Input() section : String | null | undefined;

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.url.subscribe(url => {
      console.log(url[0].path)
      this.section= url[0].path
    });
    console.log("hjhjh"+this.section)
  }
 

}
