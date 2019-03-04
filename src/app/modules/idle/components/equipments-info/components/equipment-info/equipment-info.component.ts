import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from '../../../../interfaces/equipment.interface';

@Component({
  selector: 'app-equipment-info',
  templateUrl: './equipment-info.component.html',
  styleUrls: ['./equipment-info.component.scss']
})
export class EquipmentInfoComponent implements OnInit {

  @Input() equipment: Equipment;

  constructor() { }

  ngOnInit() {
  }

}
