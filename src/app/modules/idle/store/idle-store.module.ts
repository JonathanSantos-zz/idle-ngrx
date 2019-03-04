import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { IdleFacadeService } from './idle-facade.service';
import { IDLE_FEATURE_NAME } from './state/idle.state';
import { EffectsModule } from '@ngrx/effects';
import { heroReducers } from './reducers/hero.reducers';
import { monsterReducers } from './reducers/monster.reducers';
import { equipmentReducers } from './reducers/equipment.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(IDLE_FEATURE_NAME,{
      hero: heroReducers,
      monster: monsterReducers,
      equipments: equipmentReducers
    }),
    EffectsModule.forFeature([])
  ],
  exports: [
    StoreModule
  ],
  providers: [
    IdleFacadeService
  ]
})
export class IdleStoreModule { }
