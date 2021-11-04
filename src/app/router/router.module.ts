import { NgModule } from '@angular/core';
import { RouterModule as AngularRouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RouterRoutingModule } from './router-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthService } from './auth.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HomePageComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularRouterModule,
    RouterRoutingModule,
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver,
  ],
})
export class RouterModule {}
