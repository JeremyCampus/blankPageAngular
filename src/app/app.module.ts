import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { SecondViewComponent } from './second-view/second-view.component';
import {RouterModule, Routes} from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';

const appRoutes: Routes=[
  {path: 'FirstView', component: FirstViewComponent },
  {path: 'SecondView', component: SecondViewComponent },
  {path: 'Auth', component: AuthComponent },
  {path: 'Demo', component: DeuxiemePageComponent },
  {path: '', component: SecondViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    FirstViewComponent,
    SecondViewComponent,
    FirstViewComponent,
    AppareilComponent,
    DeuxiemePageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
