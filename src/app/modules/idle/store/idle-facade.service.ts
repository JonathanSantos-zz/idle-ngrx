import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IdleState } from './state/idle.state';
import { selectEquipments, selectHero, selectMonster } from './selectors/idle.selectors';
import { AddExperience, AddHero } from './actions/hero.action';
import { AddMonster } from './actions/monster.action';


@Injectable()
export class IdleFacadeService {

  hero$ = this.store.pipe(select(selectHero));
  monster$ = this.store.pipe(select(selectMonster));
  equipments$ = this.store.pipe(select(selectEquipments));

  constructor (
    private store: Store<IdleState>
  ) { }

  loadHero () {
    return this.store.dispatch(new AddHero({
      equipments: [],
      totalMoney: 0,
      level: 0,
      hp: 100,
      name: 'Joao'
    }));
  }

  loadMonster () {
    this.store.dispatch(new AddMonster({
      lifeScale: val => val * 1.1,
      attackDamageScale: val => val * 1.1,
      name: 'Jors',
      level: 1
    }));
  }

  addExperience (xp: number) {
    this.store.dispatch(new AddExperience(xp));
  }

  addMoney (money: number) {

  }

  switchMonster (level) {
    this.store.dispatch(new AddMonster({
      lifeScale: val => val * (1 + (0.1 * level)),
      attackDamageScale: val => val * (1 + (0.1 * level)),
      name: 'Jors - ' + level,
      level
    }));

    this.addExperience(level * 10);
  }

}
