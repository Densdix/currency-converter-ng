import {Component, OnInit} from '@angular/core';
import {ICurrency} from "./types";
import {CurrencyService} from "./services/currency.service";
import {ISONumConverter} from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.currencyService.getAll().subscribe(response => {
      this.currencyData = response
      this.loading = false
      for (let c of response) {
        if (c.currencyCodeA === ISONumConverter("USD") && c.currencyCodeB === ISONumConverter("UAH")) {
          this.usdCurrency = c.rateBuy
        }
        if (c.currencyCodeA === ISONumConverter("EUR") && c.currencyCodeB === ISONumConverter("UAH")) {
          this.eurCurrency = c.rateBuy
        }
      }
    })

  }

  currencyData: ICurrency[]
  loading = false
  usdCurrency = 0
  eurCurrency = 0
  title = 'app_name';
}
