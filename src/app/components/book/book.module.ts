import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule, Router} from '@angular/router';
import { BookComponent } from './book.component';
import { InsertBookComponent } from './insert-book/insert-book.component'
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
const bookRouter : Routes =[
  {
    path : "sach",
    component : BookComponent
  },
  {
    path : 'them-sach',
    component : InsertBookComponent
  }
]

@NgModule({
  declarations: [
    BookComponent,
    InsertBookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    RouterModule.forChild(bookRouter)
  ]
})
export class BookModule { }
