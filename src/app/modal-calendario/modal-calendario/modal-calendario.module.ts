import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioPageModule } from "../../calendario/calendario.module";
import { ModalCalendarioComponent } from "../modal-calendario.component";
import { IonicModule } from "@ionic/angular";
@NgModule({
  declarations: [ModalCalendarioComponent],
  imports: [
    CommonModule,
    CalendarioPageModule,
    IonicModule
  ],
  exports:[ModalCalendarioComponent]
})
export class ModalCalendarioModule { }
