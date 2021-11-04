import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './shared';
import { ServerElementComponent } from './component/server-element/server-element.component';
import { CockpitComponent } from './component/cockpit/cockpit.component';
import { DirectiveComponent } from './directive/directive.component';
import { ServiceComponent } from './service/service.component';
import { FormComponent } from './form/form.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HomeComponent } from './shared/home/home.component';
import { RouterComponent } from './router/router.component';
import { BasicHighlightDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { AccountComponent } from './service/account/account.component';
import { NewAccountComponent } from './service/new-account/new-account.component';
import { ObservableComponent } from './observable/observable.component';
import { UserComponent } from './observable/user/user.component';
import { MainComponent } from './observable/main/main.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ShortenPipe } from './pipe/shorten.pipe';
import { RouterModule } from './router/router.module';
import { AuthInterceptorService } from './http-request/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    ServerElementComponent,
    CockpitComponent,
    DirectiveComponent,
    ServiceComponent,
    FormComponent,
    PipeComponent,
    HttpRequestComponent,
    HomeComponent,
    RouterComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ObservableComponent,
    UserComponent,
    MainComponent,
    FilterPipe,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
