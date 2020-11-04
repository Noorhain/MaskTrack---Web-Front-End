import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../material.module';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
      LoginComponent,
      AuthComponent
  ],
  imports: [
    CommonModule,
      MaterialModule,
      AuthRoutingModule
  ],
  exports: [
      LoginComponent,
      AuthComponent
  ]
})
export class AuthModule { }
