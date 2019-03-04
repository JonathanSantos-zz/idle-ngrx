import {NgModule} from "@angular/core";
import {IdleComponent} from "./idle/idle.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IdleComponent
  ],
  exports: [
    IdleComponent
  ]
})
export class IdleContainersModule { }
