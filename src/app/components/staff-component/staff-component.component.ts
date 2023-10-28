import { Component , OnInit } from '@angular/core';
import { StaffService } from 'src/app/store/services/staff.service';

@Component({
  selector: 'app-staff-component',
  templateUrl: './staff-component.component.html',
  styleUrls: ['./staff-component.component.css']
})
export class StaffComponentComponent implements OnInit {
 constructor(
  private staffService : StaffService
 ){}
 
 listStaff : any;
 sum : number = 0 ;

 ngOnInit(){
   this.getStaffs();
 }

 getStaffs(){
  this.staffService.getStaffs().subscribe(response =>{
    this.listStaff = response;
    this.sum = this.listStaff.length;
  })
 }
}
