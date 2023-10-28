import { Component , OnInit } from '@angular/core';
import { BookService } from 'src/app/store/services/book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { InvoiceService } from 'src/app/store/services/invoice.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
   private readonly notifier: NotifierService;
   data : Array<any> = []
   filter : any = {name : ""};
   listBuyBooks : Array<any> = [];
   infoBook : FormGroup;
   quantity : number = 0 ;
   discount : number = 0 ;
   totalMoney : number = 0 ;
   price : number = 0 ;
   constructor(
    private bookService : BookService,
    private invoiceService : InvoiceService,
    private notifierService: NotifierService,
   ){
    this.notifier = notifierService;
   }

   ngOnInit(): void {
     this.infoBook = this.infoBookForms
   }

   onSearch(data : any){
    this.filter.name = data ;
    this.bookService.filterBook("name="+this.filter.name).subscribe((response : any) =>{
      this.data = response;       
    })
    this.filter.name = "";
  }

  onResult(data : any){
    let result = this.listBuyBooks.find((item) => {
      return item._id === data._id
    })
    if (result) {
      this.notifier.notify("warning", "Sản phẩm đã có trong danh sách thanh toán");
    } else {
      this.infoBookForms.setValue({
        id : data._id,
        name: data.name,
        quantity: "1",
        total: data.price,
        discount: "0"
      })
      data = {
        ...data,
        quantity: 1,
        discount: 0,
        totalMoney: data.price
      }
      this.listBuyBooks.push(data);
      this.infoBook = this.infoBookForms;
      this.quantity = 0
      this.discount = 0
      this.totalMoney = 0
      this.price = 0
      this.listBuyBooks.map((item) => {
        this.quantity += Number(item.quantity);
        this.discount += Number(item.discount);
        this.totalMoney += Number(item.totalMoney);
        this.price += Number(item.price);
      })
    }

  }

  onPayment(){
    let infoPayment : Array<any> = [];
    let data : any = null;
    this.listBuyBooks.map((item)=>{
      infoPayment.push({
        bookName : item.name,
        bookPrice : item.price,
        quantity : item.quantity
      })
    })
    
    data = {
      infoPayment : infoPayment,
      customerName : "Nguyễn Văn Hoài Bảo",
      customerID : "1",
      address: "Quảng Nam",
      birthDay: "21-09-2001",
      numberPhone: "0789712109"
    }
    this.invoiceService.postRevoive(data).subscribe(response =>{
      this.listBuyBooks = [];
      this.infoBookForms.setValue({
        id :"",
        name: "",
        quantity: "",
        total: "",
        discount: ""
      })
      this.filter.name = ""
      this.notifier.notify( "success", "Thanh toán hoàn tất");
    })
    
  }

  onTotal(){
    this.quantity = 0 ;
    this.discount = 0 ;
    this.totalMoney = 0 ;
    this.price = 0 ;
    this.listBuyBooks.map((item) =>{
      this.quantity += Number(item.quantity);
      this.discount += Number(item.discount);
      this.totalMoney += Number(item.totalMoney);
      this.price += Number(item.price);
     })
  }

  onChangeQuantity(data:any){
    this.listBuyBooks.find((item)=>{
      if(item._id === data.id){
        item.quantity = data.quantity;
        item.totalMoney = item.price*item.quantity - item.discount;
      }
    })
  this.onTotal()
  }

  onChangeDiscount(data : any){
    this.listBuyBooks.find((item)=>{
      if(item._id === data.id){
        item.discount = data.discount
        item.quantity = data.quantity;
        item.totalMoney = item.price*item.quantity - item.discount;
      }
    })
   this.onTotal();
  }
   
  infoBookForms = new FormGroup({
    id: new FormControl(''),
    name : new FormControl(''),
    quantity : new FormControl(''),
    total : new FormControl(''),
    discount : new FormControl(''),
  })


}
