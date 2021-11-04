import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // None, ShadowDom
})
export class ComponentComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    if (this.serverElements.length > 0) {
      this.serverElements.splice(0, 1);
    }
  }
}
