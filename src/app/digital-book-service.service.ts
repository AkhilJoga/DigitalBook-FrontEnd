import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const CREATE_AUTHOR = "http://localhost:1001/createDigitalAuthor/";

const CHECK_AUTHOR_MAIL = "http://localhost:1001/getByEmail/";

const CREATE_BOOK_AUTHOR = "http://localhost:1001/createBookForAuthor"

const GET_BOOK_LIST_AUTHOR = "http://localhost:1001/getBookList/1";

@Injectable({
  providedIn: 'root'
})
export class DigitalBookServiceService {

  create(newAuthor:{name:string,
	email:string,
	password:string,
	re_password:string}){
    return this.http.post(CREATE_AUTHOR,newAuthor);
    
  }
  checkAuthor(email:string,password:string){
    const res = this.http.get(CHECK_AUTHOR_MAIL+email+""+password);
    console.log(email)
    console.log(password)
    console.log(res);
    return res;
  }

  createBookForAuthor(book:{title:string;
	category:string;
	publisher: string;
  image : string;
	price :string;
  releaseDate :string;
	active :string;
	content: string;
  authorId:number; 
}){
  console.log(book)
    return this.http.post(CREATE_BOOK_AUTHOR,book);
  }

  getBookListAuthor(){
    return this.http.get(GET_BOOK_LIST_AUTHOR);
  }


  constructor(public http:HttpClient) { }
}
