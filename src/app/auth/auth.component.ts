import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    isNewAccount = false;
    notUserText = 'Not a user?';
    alreadyUserText = 'Already a user?';
    logInText = 'Log in';
    registerText = 'Create an account';

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleUserMessage(): void {

    }

    onClickCreateAccount(): void {
        this.isNewAccount = !this.isNewAccount;
    }
}
