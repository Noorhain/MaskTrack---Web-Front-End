import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    hide = true;

    // TODO Validar que el username es único (al igual que el email, que ya está hecho)
    constructor() {
    }

    ngOnInit(): void {
        this.initRegisterForm();
    }

    initRegisterForm(): void {
        this.registerForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmitRegister(): void {
        console.log(this.registerForm);
    }

}
