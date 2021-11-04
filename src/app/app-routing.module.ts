import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './shared/home/home.component';
import { DirectiveComponent } from './directive/directive.component';
import { ServiceComponent } from './service/service.component';
import { ObservableComponent } from './observable/observable.component';
import { MainComponent } from './observable/main/main.component';
import { UserComponent } from './observable/user/user.component';
import { FormComponent } from './form/form.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpRequestComponent } from './http-request/http-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'service', component: ServiceComponent },
  {
    path: 'router',
    loadChildren: () =>
      import('./router/router.module').then((m) => m.RouterModule),
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'user/:id', component: UserComponent },
    ],
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'http-request',
    component: HttpRequestComponent,
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./router/router.module').then((m) => m.RouterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
