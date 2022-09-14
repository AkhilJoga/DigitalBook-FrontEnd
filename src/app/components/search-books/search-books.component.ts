import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  show=false;

  showDisable(){
    this.show=false;
  }
  search(){
    this.show=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
