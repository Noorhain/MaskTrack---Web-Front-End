import {Injectable} from '@angular/core';
import {Adapter} from '../interfaces/adapter';

export class Mask {
    constructor(
        public status: string,
        public usingNow: boolean,
        public typeName: string,
        public typeDescription: string,
        public estimatedDuration: string,
        public usage: number,
        public firstTimeUsed?: Date,
        public caption?: string
    ) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class MaskAdapter implements Adapter<Mask> {
    adapt(item: any): Mask {
        return new Mask(
            item.status,
            item.usingNow,
            item.typeName,
            item.typeDescription,
            item.estimatedDuration,
            item.usage,
            item.firstTimeUsed,
            item.caption
        );
    }
}
