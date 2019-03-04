import { HeroActions, HeroActionsEnum } from '../actions/hero.action';
import { initialIdleState } from '../state/idle.state';
import { Hero } from '../../interfaces/hero.interface';

export const heroReducers = (
  state = initialIdleState,
  action: HeroActions
): Hero => {
  switch (action.type) {
    case HeroActionsEnum.AddHero: {
      return state.hero;
    }
    case HeroActionsEnum.AddExperience: {
      return state.hero;
    }
  }
};
