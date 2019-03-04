import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from '../../interfaces/equipment.interface';

@Component({
  selector: 'app-equipments-info',
  templateUrl: './equipments-info.component.html',
  styleUrls: ['./equipments-info.component.scss']
})
export class EquipmentsInfoComponent implements OnInit {

  @Input() equipments: Equipment[];

  constructor() { }

  ngOnInit() {
  }

}
