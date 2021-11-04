import { Component, OnInit } from '@angular/core';

import { examplesMenu } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  examplesMenu: { path: string; title: string }[];

  constructor() {
    this.examplesMenu = examplesMenu;
  }

  ngOnInit(): void {}
}
