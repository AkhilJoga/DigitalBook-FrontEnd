import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/entity/Author';
import { DigitalBookServiceService } from 'src/app/digital-book-service.service';

@Component({
  selector: 'app-creat-author',
  templateUrl: './creat-author.component.html',
  styleUrls: ['./creat-author.component.css']
})

export class CreatAuthorComponent implements OnInit {
    
  author:Author=new Author();

  save(){
    const objser = this.digitalBookService.create(this.author);
    objser.subscribe(
      (res:any)=>{
        console.log(res);
      },
      function(error){
        console.log(error);
        alert("Error in while storing");
      }
      )
      window.location.reload();
  }

  constructor(public digitalBookService:DigitalBookServiceService) { }

  ngOnInit(): void {
  }

}
