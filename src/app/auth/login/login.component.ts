import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hide = true;

    constructor() {
    }

    ngOnInit(): void {
        this.initLoginForm();
    }

    initLoginForm(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmitLogin(): void {
        console.log(this.loginForm);
    }
}
