import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {Observable, tap} from "rxjs";
import {ICurrency} from "../../types";

interface Currency {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit{

    ngOnInit(): void {
        this.loading = true
        this.currencyService.getAll().subscribe(response => {
            this.currencyData = response
            this.loading = false
        })
    }

    constructor(private currencyService: CurrencyService) {}
    loading = false
    title = 'converter'
    currencyData: ICurrency
    amount = 1
    fromValue = 'USD'
    toValue ='UAH'
    // resp$: Observable<ICurrency>
    currencies: Currency[] = [
        {value: 'usd', viewValue: "USD"},
        {value: 'usd2', viewValue: "USD2"},
        {value: 'usd3', viewValue: "USD3"},
    ]
    values = ['USD', 'EUR', 'UAH']

    onChangeCurrency() {
        console.log("selected: " + this.title)
        this.title = this.toValue
        this.currencyService.getAll()
        // console.log(this.resp$)
    }

    onSwapCurrency() {
        let tempValue = this.fromValue
        this.fromValue = this.toValue
        this.toValue = tempValue
    }

    protected readonly HTMLSelectElement = HTMLSelectElement;
    protected readonly Event = Event;




}
