import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InstructorService {
    private BASE_URL : string = 'http://local.classmanagement/instructors/';

    constructor (
        private http: Http
    ) {}

    // findAll(): Observable<any> {
    //     return this.http.get(this.BASE_URL + 'view_all')
    //         .pipe(
    //             map((response: any) => {
    //                 response.json();
    //             }),
    //             catchError((error: Error) => {
    //                 return Observable.throw(new Error(error.message))
    //             })
    //         );
    // }
}