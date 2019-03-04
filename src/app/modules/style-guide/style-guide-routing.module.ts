import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './containers/style-guide/style-guide.component';

const routes: Routes = [
  {
    path: '',
    component: StyleGuideComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StyleGuideRoutingModule { }
