import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../material.module';
import {AuthRoutingModule} from './auth-routing.module';



@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
      MaterialModule,
      AuthRoutingModule
  ],
  exports: [
      LoginComponent
  ]
})
export class AuthModule { }