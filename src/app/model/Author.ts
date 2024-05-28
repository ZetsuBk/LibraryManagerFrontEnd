import { Book } from "./Book";

export interface Author {
    id: number;
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    nationality: string; 
    bookList: Book[];
  }