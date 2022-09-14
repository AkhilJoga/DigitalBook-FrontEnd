import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { AuthorComponent } from './components/author/author.component';
import { CreateBooksComponent } from './components/create-books/create-books.component';
import { BookRegisterComponent } from './components/book-register/book-register.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    AuthorComponent,
    CreateBooksComponent,
    BookRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
