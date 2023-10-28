import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule, Router} from '@angular/router';
import { BookComponent } from './book.component'
const bookRouter : Routes =[
  {
    path : "sach",
    component : BookComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(bookRouter)
  ]
})
export class BookModule { }
