import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.scss']
})
export class IdleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarLog() {
    console.log('Teste');
  }

}
