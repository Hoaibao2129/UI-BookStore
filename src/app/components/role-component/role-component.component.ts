import { Component } from '@angular/core';
import { RoleService } from 'src/app/store/services/role.service';

@Component({
  selector: 'app-role-component',
  templateUrl: './role-component.component.html',
  styleUrls: ['./role-component.component.css']
})
export class RoleComponentComponent {
   constructor(
    private roleService : RoleService, 
   ){}
   roleList : any ;
   sum : number = 0 ;
   ngOnInit(){
    this.getRoleList();
   }

   getRoleList(){
    this.roleService.getRoleList().subscribe(response =>{
      this.roleList = response;
      this.sum = this.roleList.length;
    })
   }
}
