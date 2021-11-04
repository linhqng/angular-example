import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  onCreateAccount(account: { name: string; status: string }) {
    this.accountsService.addAccount(account);
  }
}
