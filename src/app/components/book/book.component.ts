import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/store/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(
    private bookService : BookService,
    public router : Router,
    private route: ActivatedRoute
  ){
   
  }

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

 onNavigateInfoBook(data : any){
  this.router.navigate([`${"thong-tin-sach/" + data._id}`])
 }
}
