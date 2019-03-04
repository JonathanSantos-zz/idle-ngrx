import { initialMonsterState } from './monster.state';
import { initialHeroState } from './hero.state';
import { Monster } from '../../interfaces/monster.interface';
import { Hero } from '../../interfaces/hero.interface';

export const IDLE_FEATURE_NAME = 'IDLE_FEATURE';

export interface IdleState {
  monster: Monster,
  hero: Hero
}

export const initialIdleState: IdleState = {
  monster: initialMonsterState,
  hero: initialHeroState
};
