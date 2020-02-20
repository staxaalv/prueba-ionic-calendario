import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarioPage } from "../calendario/calendario.page";
@Component({
  selector: 'app-modal-calendario',
  templateUrl: './modal-calendario.component.html',
  styleUrls: ['./modal-calendario.component.scss'],
})
export class ModalCalendarioComponent implements OnInit {
  @Output() messageToEmit = new EventEmitter<any>();
  

  constructor(private modController:ModalController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modController.create({
      component: CalendarioPage
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.messageToEmit.emit(data)
  }

}
