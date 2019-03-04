import {createFeatureSelector, createSelector} from "@ngrx/store";
import { Hero } from '../../interfaces/hero.interface';
import { IDLE_FEATURE_NAME, IdleState, initialIdleState } from '../state/idle.state';

const selectIdle = createFeatureSelector<IdleState>(IDLE_FEATURE_NAME);

export const selectHero = createSelector(
  selectIdle,
  (state: IdleState) => {
    return state.hero
  }
);

export const selectEquipments = createSelector(
  selectHero,
  (hero: Hero) => hero.equipments
);

export const selectMonster = createSelector(
  selectIdle,
  (state: IdleState) => state.monster
);
