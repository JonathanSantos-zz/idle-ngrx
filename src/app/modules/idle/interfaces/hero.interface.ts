import { Equipment } from './equipment.interface';

export interface Hero {
  hp: number;
  level: number;
  totalMoney: number;
  equipments: Equipment[];
}
