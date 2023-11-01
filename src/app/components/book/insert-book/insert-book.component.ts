import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/bookModel';
import { BookService } from 'src/app/store/services/book.service';
import { NotifierService } from 'angular-notifier';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {

  bookForm: FormGroup;
  private readonly notifier: NotifierService;

  constructor(
   private bookService : BookService,
   private notifierService: NotifierService,
   public _location: Location,
  ){ 
    this.notifier = notifierService;
  }
  ngOnInit(): void {
    this.bookForm = this.booksForm
  }

  back(){
    this._location.back();
  }

  insertBook(){
    let book : Book = {
      name : this.bookForm.value.bookName,
      author : this.bookForm.value.authorName,
      price : this.bookForm.value.price,
      quantity : this.bookForm.value.quantity
    }
    this.bookService.insertBook(book).subscribe(response =>{
      this.booksForm.setValue({
        bookName : "",
        authorName :"",
        price : "",
        quantity : "",
      })
      this.notifier.notify("success", "Thêm sách mới thành công")
    })
  }

  booksForm = new FormGroup({
    bookName : new FormControl('' ,[Validators.required]),
    authorName : new FormControl(''),
    price : new FormControl('' ,[Validators.required]),
    quantity : new FormControl('' ,[Validators.required])
  })
  
}
