import { Equipment } from './equipment.interface';

export interface Hero {
  name: string;
  hp: number;
  level: number;
  totalMoney: number;
  equipments: Equipment[];
}
