import { Component, OnInit } from '@angular/core';
import { DigitalBookServiceService } from 'src/app/digital-book-service.service';
import { Author } from 'src/app/entity/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  email:string="";
  password:string="";

  redirect(){
    const res = this.digitalBookService.checkAuthor(this.email,this.password);
    console.log("Response :"+res);
    return "bookRegister";
  }

  constructor(public digitalBookService:DigitalBookServiceService) { }

  ngOnInit(): void {
  }

}
