import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICurrency} from "../types";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<ICurrency[]> {
        return this.http.get<ICurrency[]>('https://api.monobank.ua/bank/currency', {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
            // params: new HttpParams().set('from', 'UAH').set('to', 'USD')
        })
    }

}
