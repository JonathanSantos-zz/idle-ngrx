import { Hero } from '../../interfaces/hero.interface';
import { initialEquipmentState } from './equipment.state';

export interface HeroState {
  hero: Hero
}

export const initialHeroState: HeroState = {
  hero: {
    ...initialEquipmentState,
    hp: 100,
    level: 1,
    totalMoney: 0
  }
};
