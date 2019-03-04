import { Monster } from '../../interfaces/monster.interface';

export interface MonsterState {
  monster: Monster
}

export const initialMonsterState: MonsterState = {
  monster: {
    level: 0,
    name: 'First',
    attackDamageScale: val => val,
    lifeScale: val => val
  }
};
