import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsInfoComponent } from './equipments-info.component';
import { EquipmentInfoComponent } from './components/equipment-info/equipment-info.component';

@NgModule({
  declarations: [
    EquipmentsInfoComponent,
    EquipmentInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EquipmentsInfoComponent
  ]
})
export class EquipmentsInfoModule { }
