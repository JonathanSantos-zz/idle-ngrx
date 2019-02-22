import {NgModule} from "@angular/core";
import {IdleComponent} from "./idle/idle.component";
import {IdleButtonComponent} from "../components/idle-button/idle-button.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IdleComponent,
    IdleButtonComponent
  ],
  exports: [
    IdleComponent
  ]
})
export class IdleContainersModule { }
