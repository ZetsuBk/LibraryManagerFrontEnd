import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorTableComponent } from './author-table/author-table.component';
import { BookTableComponent } from './book-table/book-table.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'authors', component: AuthorTableComponent},
    {path: 'books', component: BookTableComponent},
    {path: 'upload', component: UploadComponent},

];
