import { Action } from '@ngrx/store';
import { Monster } from '../../interfaces/monster.interface';

export enum MonsterActionsEnum {
  AddMonster = '[Monster] AddMonster',
  RemoveMonster = '[Monster] RemoveMonster',
  ChangeMonster = '[Monster] ChangeMonster'
}

export class AddMonster implements Action {
  public readonly type = MonsterActionsEnum.AddMonster;
  constructor (public monster: Monster) {}
}

export class RemoveMonster implements Action {
  public readonly type = MonsterActionsEnum.RemoveMonster;
  constructor () {}
}

export class ChangeMonster implements Action {
  public readonly type = MonsterActionsEnum.ChangeMonster;
  constructor (public monster: Monster) {}
}

export type MonsterActions = AddMonster | RemoveMonster | ChangeMonster;
