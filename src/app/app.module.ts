import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialAngularModule} from './app-material-angular/app-material-angular.module';
import { NavMenuComponent } from './components/nav-bar/nav-menu/nav-menu.component'
import { FlexLayoutModule} from '@angular/flex-layout';
import { SidenavListComponent } from './components/nav-bar/sidenav-list/sidenav-list.component'
@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HomeComponent,
    NavMenuComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialAngularModule,
    FlexLayoutModule
],
  exports: [
    FlexLayoutModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
