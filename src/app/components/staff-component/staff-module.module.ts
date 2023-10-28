import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponentComponent } from './staff-component.component';
import { InsertStaffComponentComponent } from './insert-staff-component/insert-staff-component.component';
import { Routes , RouterModule} from '@angular/router';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { NotifierModule , NotifierOptions } from 'angular-notifier';


const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'middle',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


const staffRoutes : Routes = [
  {
  path: "nhan-vien",
  component : StaffComponentComponent,
  },
  {
    path :"them-nhan-vien",
    component : InsertStaffComponentComponent
  }
]
@NgModule({
  declarations: [
    StaffComponentComponent,
    InsertStaffComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    RouterModule.forChild(staffRoutes)
  ]
})
export class StaffModuleModule { }
