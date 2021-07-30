import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { apiPaths } from '../config/config';
import { ICar } from '../interfaces/i-cars';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    constructor(protected http: HttpClient) { }

    getAll(): Observable<ICar[]> {
        return this.http.get<ICar[]>(apiPaths.cars)
        catchError(error => {
            return throwError(error.error);
        })
    }
}