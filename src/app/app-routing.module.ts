import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'idle'
  },
  {
    path: 'idle',
    loadChildren: './modules/idle/idle.module#IdleModule'
  },
  {
    path: 'style-guide',
    loadChildren: './modules/style-guide/style-guide.module#StyleGuideModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
