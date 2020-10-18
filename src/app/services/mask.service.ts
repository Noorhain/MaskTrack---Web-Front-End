import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IMask} from '../interfaces/i-mask';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MaskService {
    apiUrl: string;


    constructor(
        private http: HttpClient
    ) {
        this.apiUrl = environment.apiURL;
    }

    masksTest(): Observable<any> {
        return this.http.get(this.apiUrl + '/masksTest');
    }
}
