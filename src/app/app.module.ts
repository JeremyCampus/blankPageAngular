import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { SecondViewComponent } from './second-view/second-view.component';
import {RouterModule, Routes} from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';
import { AuthService } from './services/auth.service';

const appRoutes: Routes=[
  {path: 'FirstView', component: FirstViewComponent },
  {path: 'SecondView', component: SecondViewComponent },
  {path: 'Auth', component: AuthComponent },
  {path: '', component: SecondViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    FirstViewComponent,
    SecondViewComponent,
    FirstViewComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
