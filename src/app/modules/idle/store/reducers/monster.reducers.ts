import { MonsterActions, MonsterActionsEnum } from '../actions/monster.action';
import { initialIdleState } from '../state/idle.state';
import { Monster } from '../../interfaces/monster.interface';

export const monsterReducers = (
  state = initialIdleState,
  action: MonsterActions
): Monster => {
  switch (action.type) {
    case MonsterActionsEnum.AddMonster:
    case MonsterActionsEnum.ChangeMonster: {
      return state.monster;
    }
    case MonsterActionsEnum.RemoveMonster: {
      return null;
    }
  }
};
