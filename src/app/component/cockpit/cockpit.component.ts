import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //alias
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //ngModel
  newServerName = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: contentInput.value,
    });
  }

  onAddBlueprint(contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: contentInput.value,
    });
  }
}
