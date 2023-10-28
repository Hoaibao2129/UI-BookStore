import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from 'src/app/store/services/staff.service';
import { RoleService } from 'src/app/store/services/role.service';
import { Staff} from "../../../models/staffModel";
import { NotifierService } from 'angular-notifier';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-insert-staff-component',
  templateUrl: './insert-staff-component.component.html',
  styleUrls: ['./insert-staff-component.component.css']
})
export class InsertStaffComponentComponent implements OnInit {

  staffForm: FormGroup;
  roleList : any;
  selectedRole : string;
  private readonly notifier: NotifierService;
 
  
  constructor(
    private staffService: StaffService,
    private roleService : RoleService,
    private notifierService: NotifierService,
    public _location: Location,
  ) { 
     this.notifier = notifierService;
  }


  ngOnInit() {
    this.getRole();
    this.staffForm = this.staffForms;
  }

  getRole(){
    this.roleService.getRoleList().subscribe(response =>{
      this.roleList = response ;
    })
  }

  staffForms = new FormGroup({
    name : new FormControl(''),
    tel : new FormControl(''),
    email : new FormControl(''),
    birthday : new FormControl(''),
    roleName : new FormControl(''),
  })

  back(){
    this._location.back();
  }

  insertSaff() {
    let staff : Staff  = {
      birthday : this.staffForm.value.birthday,
      staffId : this.staffForm.value.staffId,
      name : this.staffForm.value.name ,
      tel : this.staffForm.value.tel.replaceAll(' ', ''),
      roleId : "" ,
      roleName : this.staffForm.value.roleName,
      id_number : "",
    };
    this.staffService.insertStaff(staff).subscribe(response =>{
      if(typeof response !== "string"){
        this.notifier.notify("sucess", "Đã tạo mới nhân viên " + staff.name)
        this._location.back();
      }else{
        this.notifier.notify( "warning", response);
      }
    })
  }
}
