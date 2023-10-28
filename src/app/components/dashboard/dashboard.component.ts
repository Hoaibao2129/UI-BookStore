import { Component } from '@angular/core';
import { RevenueService } from "../../store/services/revenue.service";
import { BookService } from 'src/app/store/services/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private RevenueService: RevenueService,
    private BookService: BookService
    ) {}
  
  revenueDay : any;
  revenueMonth : any;
  listLowQuantityBook : any;

  ngOnInit(){
   this.getRevenueDay();
   this.getRevenueMonth();
   this.getListQuantity();
  }

  // public getRevenueDay() {
  //   this.RevenueService.getRevenueDay()
  //     .subscribe(response => {
  //       this.revenueDay = response; 
  //       if(this.revenueDay.length == 0){
  //        this.revenueDay.push({
  //         revenue : 0
  //        })
  //       }
  //     });  
  // }

  public getRevenueDay() {
    this.RevenueService.getRevenueDay().subscribe(response => {
        this.revenueDay = response; 
    });  
  }

 

  public getRevenueMonth() {
    this.RevenueService.getRevenueMonth().subscribe(response => {
      this.revenueMonth = response;
    })
  }

  public getListQuantity() {
    this.BookService.getListLowQuantity().subscribe(response => {
      this.listLowQuantityBook = response;
    })
  }

}
