import { Equipment } from '../../interfaces/equipment.interface';

export interface EquipmentState {
  equipments: Equipment[]
}

export const initialEquipmentState: EquipmentState = {
  equipments: []
};
