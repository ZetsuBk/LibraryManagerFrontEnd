import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UploadComponent } from "./upload/upload.component";
import { BodyComponent } from "./body/body.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,RouterLink]
})
export class AppComponent {
  title = 'libraryManager';
  secion="";
  nav(section : string){
    this.secion=section;
  }
}
