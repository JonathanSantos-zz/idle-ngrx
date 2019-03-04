import { Action } from '@ngrx/store';
import { Hero } from '../../interfaces/hero.interface';

export enum HeroActionsEnum {
  AddHero = '[Hero] AddHero',
  AddExperience = '[Hero] AddExperience'
}

export class AddHero implements Action {
  public readonly type = HeroActionsEnum.AddHero;
  constructor (public payload: Hero) {}
}

export class AddExperience implements Action {
  public readonly type = HeroActionsEnum.AddExperience;
  constructor (public experience: number) {}
}

export type HeroActions = AddHero | AddExperience;
