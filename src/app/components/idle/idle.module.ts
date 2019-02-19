import { NgModule } from '@angular/core';

import { IdleRoutingModule } from './idle-routing.module';
import { IdleComponent } from './containers/idle/idle.component';
import {IdleContainersModule} from "./containers/idle-containers.module";
import {IdleStoreModule} from "./store/idle-store.module";

@NgModule({
  imports: [
    IdleRoutingModule,
    IdleContainersModule,
    IdleStoreModule
  ],
  exports: [
    IdleComponent
  ]
})
export class IdleModule { }
