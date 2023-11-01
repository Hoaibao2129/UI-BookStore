import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/store/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(
    private bookService : BookService
  ){}

  listBooks : any ;
  sum : number ;
 ngOnInit(): void {
   this.onGetBook();
 }

 onGetBook(){
  this.bookService.getListBook().subscribe(response =>{
    this.listBooks = response;
    this.sum = this.listBooks.length
  })
 }

 onDetailBook(data : any){
  console.log(data);
 }
}
