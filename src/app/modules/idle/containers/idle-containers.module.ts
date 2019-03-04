import {NgModule} from "@angular/core";
import {IdleComponent} from "./idle/idle.component";
import {CommonModule} from "@angular/common";
import { IdleModule } from './idle/idle.module';

@NgModule({
  imports: [
    CommonModule,
    IdleModule
  ],
  exports: [
    IdleComponent
  ]
})
export class IdleContainersModule { }
