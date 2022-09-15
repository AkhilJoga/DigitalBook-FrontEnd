import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { AuthorComponent } from './components/author/author.component';
import { CreateBooksComponent } from './components/create-books/create-books.component';
import { BookRegisterComponent } from './components/book-register/book-register.component';
import { CreatAuthorComponent } from './components/creat-author/creat-author.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    AuthorComponent,
    CreateBooksComponent,
    BookRegisterComponent,
    CreatAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
