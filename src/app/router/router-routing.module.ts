import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterComponent } from './router.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RouterComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
      },
      {
        path: 'servers',
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
          {
            path: ':id',
            component: ServerComponent,
            resolve: { server: ServerResolver },
          },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [CanDeactivateGuard],
          },
        ],
      },
      {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page not found!' },
      },
      { path: '**', redirectTo: '/not-found' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterRoutingModule {}
