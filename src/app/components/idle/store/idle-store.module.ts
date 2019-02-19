import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature('idle', [])
  ],
  exports: [
    StoreModule
  ]
})
export class IdleStoreModule { }
