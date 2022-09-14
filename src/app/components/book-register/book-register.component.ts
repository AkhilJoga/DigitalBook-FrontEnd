import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent implements OnInit {
  show=false;

  listBooks(){
    this.show=true;
  }
  showDisable(){
    this.show=false;
  }

  save(){
    this.show=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
