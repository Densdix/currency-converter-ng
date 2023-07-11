import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../types";
import {ISONumConverter} from "../../utils";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit{

  ngOnInit(): void {
    this.onChangeCurrency()
  }
  @Input({required: true}) currencyData: ICurrency[]
  amount = 1
  calcAmount = 0
  fromValue = 'USD'
  toValue = 'UAH'
  values = ['USD', 'EUR', 'UAH']

  onChangeCurrency() {
    let fromValueCode = ISONumConverter(this.fromValue)
    let toValueCode = ISONumConverter(this.toValue)

    for (let c of this.currencyData) {
      if (c.currencyCodeA === fromValueCode && c.currencyCodeB === toValueCode) {
        this.calcAmount = Math.round((this.amount * c.rateBuy + Number.EPSILON) * 100) / 100
        break
      }
      if (c.currencyCodeA === toValueCode && c.currencyCodeB === fromValueCode) {
        this.calcAmount = Math.round((this.amount / c.rateBuy + Number.EPSILON) * 100) / 100
        break
      }
      if (fromValueCode === toValueCode){
        this.calcAmount = this.amount
        break
      }
    }
  }

  onSwapCurrency() {
    let tempValue = this.fromValue
    this.fromValue = this.toValue
    this.toValue = tempValue
    this.onChangeCurrency()
  }

}
