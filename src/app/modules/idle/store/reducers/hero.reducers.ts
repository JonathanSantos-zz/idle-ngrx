import { HeroState, initialHeroState } from '../state/hero.state';
import { HeroActions, HeroActionsEnum } from '../actions/hero.action';

export const heroReducers = (
  state = initialHeroState,
  action: HeroActions
): HeroState => {
  switch (action.type) {
    case HeroActionsEnum.AddHero: {
      return {
        ...state,
        hero: action.payload
      };
    }
    case HeroActionsEnum.AddExperience: {
      return state;
    }
  }
};
