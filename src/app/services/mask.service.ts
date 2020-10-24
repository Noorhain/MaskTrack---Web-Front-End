import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Mask, MaskAdapter} from '../models/mask.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MaskService {
    apiUrl: string;

    constructor(
        private http: HttpClient,
        private adapter: MaskAdapter
    ) {
        this.apiUrl = environment.apiURL;
    }

    // Retorna un solo objeto de tipo Mask, y no un array de ellas
    masksTest(): Observable<Mask> {
        return this.http.get(this.apiUrl + '/masksTest').pipe(
            map((data: any) => this.adapter.adapt(data))
        );
    }
}
