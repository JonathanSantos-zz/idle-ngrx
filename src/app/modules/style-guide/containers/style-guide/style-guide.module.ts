import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideComponent } from './style-guide.component';

@NgModule({
  declarations: [StyleGuideComponent],
  imports: [
    CommonModule
  ],
  exports: [StyleGuideComponent]
})
export class StyleGuideModule { }
