import { Monster } from '../../interfaces/monster.interface';

export const initialMonsterState: Monster = {
  level: 0,
  name: 'First',
  attackDamageScale: val => val,
  lifeScale: val => val
};
