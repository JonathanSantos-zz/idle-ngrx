import { Component, OnInit } from '@angular/core';
import { IdleFacadeService } from '../../store/idle-facade.service';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.scss']
})
export class IdleComponent implements OnInit {

  constructor(
    private idleFacadeService: IdleFacadeService
  ) {}

  hero$ = this.idleFacadeService.hero$;
  monster$ = this.idleFacadeService.monster$;

  ngOnInit() {
    this.idleFacadeService.loadMonster();
    this.idleFacadeService.loadHero();
  }

}
