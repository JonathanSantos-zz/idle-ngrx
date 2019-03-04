import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdleComponent } from './idle.component';
import { HeroInfoModule } from '../../components/hero-info/hero-info.module';

@NgModule({
  imports: [
    CommonModule,
    HeroInfoModule
  ],
  declarations: [
    IdleComponent
  ],
  exports: [
    IdleComponent
  ]
})
export class IdleModule { }
