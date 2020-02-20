import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponentOptions } from 'ion2-calendar';

import { ModalController } from "@ionic/angular";
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

fechaSelect;
viewTitle;
calendar = {
  mode: 'month',
  currentDate: new Date(),
};
event = {
  title: '',
  desc: '',
  startTime: '',
  endTime: '',
  allDay: false
};
markDisabled = (date: Date) => {
  var current = new Date();
  return date >= current;
};


  constructor(private alertCtrl: AlertController,@Inject(LOCALE_ID) private locale: string,private modalController:ModalController) { }
  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
      "ubicacion": {
        fecha: this.fechaSelect
      }
    });
  }

  ngOnInit() {
  }
  onViewTitleChanged(title) {
    console.log("IMPRIMIENDO TITULO: "+title);
    this.viewTitle = title;
  }
  onCurrentDataChanged(event:Date){
    this.fechaSelect=event;
    console.log("imprimiendo seleccion de fecha: "+ this.fechaSelect);
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
   
  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }


}
