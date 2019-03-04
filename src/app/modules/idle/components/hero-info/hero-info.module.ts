import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroInfoComponent } from './hero-info.component';
import { EquipmentsInfoModule } from '../equipments-info/equipments-info.module';

@NgModule({
  declarations: [
    HeroInfoComponent
  ],
  imports: [
    CommonModule,
    EquipmentsInfoModule
  ],
  exports: [
    HeroInfoComponent
  ]
})
export class HeroInfoModule { }
