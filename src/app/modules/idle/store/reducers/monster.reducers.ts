import { initialMonsterState, MonsterState } from '../state/monster.state';
import { MonsterActions, MonsterActionsEnum } from '../actions/monster.action';

export const monsterReducers = (
  state = initialMonsterState,
  action: MonsterActions
): MonsterState => {
  switch (action.type) {
    case MonsterActionsEnum.AddMonster:
    case MonsterActionsEnum.ChangeMonster: {
      return {
        ...state,
        monster: action.monster
      };
    }
    case MonsterActionsEnum.RemoveMonster: {
      return {
        ...state,
        monster: null
      };
    }
  }
};
