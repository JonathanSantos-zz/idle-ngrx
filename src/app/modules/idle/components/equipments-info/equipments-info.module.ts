import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsInfoComponent } from './equipments-info.component';

@NgModule({
  declarations: [EquipmentsInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EquipmentsInfoComponent
  ]
})
export class EquipmentsInfoModule { }
