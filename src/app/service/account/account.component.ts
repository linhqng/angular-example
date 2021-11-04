import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string } = {
    name: '',
    status: '',
  };
  @Input() id: number = 0;

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
