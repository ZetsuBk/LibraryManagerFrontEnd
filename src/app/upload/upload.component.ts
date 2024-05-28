import { Component } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  data : Book []
  fileContent : string

  constructor(private bookService:BookService){
    this.data = []
    this.fileContent = ""

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt: any) => {
      const jsonData = JSON.parse(evt.target.result);
      this.data = jsonData
      this.fileContent = JSON.stringify(this.data)
      };
    }
  }

  onSubmit(){
   this.bookService.postListOfBooks(this.data).subscribe(
    message => alert(message.message)
   )
   
  }
}
