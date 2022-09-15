import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/entity/Book';
import { Router } from '@angular/router';
import { DigitalBookServiceService } from 'src/app/digital-book-service.service';
@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent implements OnInit {
  books:Book[]=[];
  show=false;
  book:Book = new Book();


  listBooks(){
    this.show=true;
  }
  showDisable(){
    this.show=false;
  }

  save(){
    this.show=true;
    this.book.authorId=1;
    const objser = this.digitalBookService.createBookForAuthor(this.book);
    objser.subscribe(
      (res:any)=>{
        console.log(res);
      },
      function(error){
        console.log(error);
        alert("Error in while storing");
      }
      )
  }

  constructor(public digitalBookService:DigitalBookServiceService,public router:Router) { }

  ngOnInit(): void {

    const promise = this.digitalBookService.getBookListAuthor();
    promise.subscribe(
    (response)=> {console.log();
    this.books = response as Book[];
  })
  }

}
