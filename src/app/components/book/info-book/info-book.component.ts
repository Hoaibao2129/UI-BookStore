import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/store/services/book.service';
import * as _ from 'lodash';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/bookModel';
@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {

  idBook : any ;
  infoBook : any ;
  infoBookForm: FormGroup;
  disable : boolean = true;
  qrData : any ;

  constructor(
    public router : Router,
    private route: ActivatedRoute,
    private bookService : BookService,
    private _fb: FormBuilder,
  ){
    this.route.paramMap.subscribe(params =>{
      this.idBook = params.get("id");
    })
    this.infoBookForm = this.booksForm
  }

  ngOnInit(): void {
    this.onLoadBookById(this.idBook);
  }


  onLoadBookById(id: string){
    this.bookService.getListBookById(id).subscribe((response : any) =>{
      this.infoBook = {
        name : response[0].name,
        author : response[0].author,
        price : response[0].price,
        quantity : response[0].quantity,
        qr : response[0].qr
      }
      this.qrData = response[0].qr;
      console.log(response);
      console.log(this.qrData);
      this.infoBookForm.setValue({
        bookName : this.infoBook.name ,
        authorName : this.infoBook.author,
        price : String(this.infoBook.price),
        quantity: String(this.infoBook.quantity),
      })
      this.infoBookForm.disable();
   })
  }

  onCheck(){
    this.disable = ! this.disable;
    if(this.disable == true){
      this.infoBookForm.disable();
    }else{
      this.infoBookForm.enable();
    }
  }

  saveAsImage() {
    // converts base 64 encoded image to blobData
    let blobData = this.convertBase64ToBlob(this.qrData);
    const _win = window.navigator as any;
    // saves as image
    if (_win && _win.msSaveOrOpenBlob) {
      //IE
      _win.msSaveOrOpenBlob(blobData, 'Qrcode');
    } else {
      // chrome
      const blob = new Blob([blobData], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    }

    if (_win.msSaveOrOpenBlob)
      // IE10+
      _win.msSaveOrOpenBlob(blobData, 'Qrcode');
    else {
      const blob = new Blob([blobData], { type: 'image/png' });
      var url = window.URL.createObjectURL(blob);
      window.open(url);
    }
  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }



  booksForm = new FormGroup({
    bookName : new FormControl('' ,[Validators.required]),
    authorName : new FormControl(''),
    price : new FormControl('' ,[Validators.required]),
    quantity : new FormControl('' ,[Validators.required])
  })
}
