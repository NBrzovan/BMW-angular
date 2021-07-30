import { INavigation } from './../interfaces/i-navigaton';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { apiPaths } from '../config/config';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    constructor(protected http: HttpClient) { }

    getAll(): Observable<INavigation[]> {
        return this.http.get<INavigation[]>(apiPaths.navigation)
        catchError(error => {
            return throwError(error.error);
        })
    }
}