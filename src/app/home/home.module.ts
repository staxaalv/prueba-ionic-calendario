import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';
import { ModalCalendarioModule } from "../modal-calendario/modal-calendario/modal-calendario.module";
@NgModule({
  imports: [
    NgCalendarModule,
    CalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCalendarioModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
