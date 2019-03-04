import { Hero } from '../../interfaces/hero.interface';
import { initialEquipmentState } from './equipment.state';

export const initialHeroState: Hero = {
  equipments: initialEquipmentState,
  hp: 100,
  level: 1,
  totalMoney: 0
};
