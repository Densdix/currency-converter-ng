import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ICurrency} from "../types";
import {ErrorService} from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    constructor(private http: HttpClient, private errorService: ErrorService) {}

    getAll(): Observable<ICurrency[]> {
        return this.http.get<ICurrency[]>('https://api.monobank.ua/bank/currency', {
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
            // params: new HttpParams().set('from', 'UAH').set('to', 'USD')
        }).pipe(
          catchError(this.errorHandler.bind(this))
        )
    }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errorDescription)
    return throwError(()=> error.error)
  }

}
