import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideModule } from './style-guide/style-guide.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StyleGuideModule
  ],
  exports: [
    StyleGuideComponent
  ]
})
export class StyleGuideContainersModule { }
