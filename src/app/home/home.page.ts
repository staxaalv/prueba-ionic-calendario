import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponentOptions } from 'ion2-calendar';
import {ModalCalendarioComponent} from "../modal-calendario/modal-calendario.component";
  import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public receivedChildMessage:any;
  /*date: string;
  type: 'string';
  optionsSingle: CalendarComponentOptions = {
    color: 'danger'
  };
  constructor() { }

  
  onChange(event) {
    console.log("viendo e on Change: ");
    console.log(event._d);
  }
  onEventSelected(event) {
    console.log('on EventSelected'+ event);
  }
  onDaySelect($event){
   console.log("cluasjhad");   
  }
*/

constructor() { }

  gOnInit() {
  }
  public getMessage(message: any) {
    console.log(message);
  }
  
}
