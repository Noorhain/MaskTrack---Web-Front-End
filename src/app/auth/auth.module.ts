import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from '../material.module';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        LoginComponent,
        AuthComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent,
        AuthComponent
    ]
})
export class AuthModule {
}
