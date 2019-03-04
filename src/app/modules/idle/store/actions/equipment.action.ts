import { Equipment } from '../../interfaces/equipment.interface';
import { Action } from '@ngrx/store';

export enum EquipmentActionsEnum {
  AddEquipments = '[Equipment] AddEquipments',
  UpgradeEquipments = '[Equipment] UpgradeEquipments',
  RemoveEquipments = '[Equipment] RemoveEquipments'
}

export class AddEquipments implements Action {
  public readonly type = EquipmentActionsEnum.AddEquipments;
  constructor (public equipments: Equipment[]) {}
}

export class UpgradeEquipments implements Action {
  public readonly type = EquipmentActionsEnum.UpgradeEquipments;
  constructor (public equipments: Equipment[] | Equipment) {}
}

export class RemoveEquipments implements Action {
  public readonly type = EquipmentActionsEnum.RemoveEquipments;
  constructor (public equipments: Equipment[] | Equipment) {}
}

export type EquipmentActions = AddEquipments | UpgradeEquipments | RemoveEquipments;
