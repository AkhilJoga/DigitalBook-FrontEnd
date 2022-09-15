import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { AuthorComponent } from './components/author/author.component';
import { BookRegisterComponent } from './components/book-register/book-register.component';
import { CreatAuthorComponent } from './components/creat-author/creat-author.component';

const routes: Routes = [
  {path:'searchBook',component:SearchBooksComponent},
  {path:'author',component:AuthorComponent},
  {path:'author/bookRegister',component:BookRegisterComponent},
  {path:'author/registerAuthor',component:CreatAuthorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 



}
