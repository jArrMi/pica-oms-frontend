// HTTP Client
import {ApiModule, BASE_PATH, Configuration, ConfigurationParameters} from './http-client';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: BASE_PATH, useValue: 'https://your-web-service.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
