import { NgModule } from '@angular/core';

import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideContainersModule } from './containers/style-guide-containers.module';

@NgModule({
  imports: [
    StyleGuideContainersModule,
    StyleGuideRoutingModule
  ]
})
export class StyleGuideModule { }
