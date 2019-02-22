import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdleComponent } from "./containers/idle/idle.component";

const routes: Routes = [
  {
    path: '',
    component: IdleComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdleRoutingModule { }
