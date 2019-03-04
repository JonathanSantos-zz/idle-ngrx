import { EquipmentActions, EquipmentActionsEnum } from '../actions/equipment.action';
import { Equipment } from '../../interfaces/equipment.interface';
import { initialIdleState } from '../state/idle.state';

export const equipmentReducers = (
  state = initialIdleState,
  action: EquipmentActions
): Equipment[] => {
  switch (action.type) {
    case EquipmentActionsEnum.AddEquipments: {
      return [...state.hero.equipments, ...action.equipments];
    }
    case EquipmentActionsEnum.UpgradeEquipments: {
      return state.hero.equipments;
    }
    case EquipmentActionsEnum.RemoveEquipments: {
      return state.hero.equipments;
    }
  }
};
