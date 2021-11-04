import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers/servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss'],
})
export class RouterComponent implements OnInit {
  private servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }
}
