import { EquipmentState, initialEquipmentState } from '../state/equipment.state';
import { EquipmentActions, EquipmentActionsEnum } from '../actions/equipment.action';

export const equipmentReducers = (
  state = initialEquipmentState,
  action: EquipmentActions
): EquipmentState => {
  switch (action.type) {
    case EquipmentActionsEnum.AddEquipments: {
      return {
        ...state,
        equipments: [...state.equipments, ...action.equipments]
      };
    }
    case EquipmentActionsEnum.UpgradeEquipments: {
      return state;
    }
    case EquipmentActionsEnum.RemoveEquipments: {
      return state;
    }
  }
};
