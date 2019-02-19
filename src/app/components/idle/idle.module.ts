import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdleRoutingModule } from './idle-routing.module';
import { IdleComponent } from './containers/idle/idle.component';

@NgModule({
  declarations: [IdleComponent],
  imports: [
    CommonModule,
    IdleRoutingModule
  ]
})
export class IdleModule { }
