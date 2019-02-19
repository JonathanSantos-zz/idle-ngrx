import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdleRoutingModule } from './idle-routing.module';
import { IdleComponent } from './containers/idle/idle.component';
import { IdleButtonComponent } from './components/idle-button/idle-button.component';

@NgModule({
  declarations: [
    IdleComponent,
    IdleButtonComponent
  ],
  imports: [
    CommonModule,
    IdleRoutingModule
  ],
  exports: [
    IdleComponent
  ]
})
export class IdleModule { }
