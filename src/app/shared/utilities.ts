import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

export function extractData(res: Response) {
    let body = res.json();

    return body.data || {};
}

export function handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);

        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
}
