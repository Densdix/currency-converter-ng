import {Component, Input} from '@angular/core';
import {ICurrency} from "../../types";
import {ISONumConverter} from "../../utils";

@Component({
  selector: 'app-converter-extended',
  templateUrl: './converter-extended.component.html',
  styleUrls: ['./converter-extended.component.css']
})
export class ConverterExtendedComponent {
  ngOnInit(): void {
    this.onChangeCurrency()
  }

  @Input({required: true}) currencyData: ICurrency[]
  fromAmount = 1
  toAmount = 1
  fromValue = 'USD'
  toValue = 'UAH'
  values = ['USD', 'EUR', 'UAH']

  onChangeCurrency(order: boolean = true) {
    let fromValueCode = ISONumConverter(this.fromValue)
    let toValueCode = ISONumConverter(this.toValue)

    for (let c of this.currencyData) {
      if (c.currencyCodeA === fromValueCode && c.currencyCodeB === toValueCode) {
        order
          ? this.toAmount = Math.round((this.fromAmount * c.rateBuy + Number.EPSILON) * 100) / 100
          : this.fromAmount = Math.round((this.toAmount * c.rateBuy + Number.EPSILON) * 100) / 100

        break
      }
      if (c.currencyCodeA === toValueCode && c.currencyCodeB === fromValueCode) {
        order
          ? this.toAmount = Math.round((this.fromAmount / c.rateBuy + Number.EPSILON) * 100) / 100
          : this.fromAmount = Math.round((this.toAmount / c.rateBuy + Number.EPSILON) * 100) / 100
        break
      }
      if (fromValueCode === toValueCode) {
        order
          ? this.toAmount = this.fromAmount
          : this.fromAmount = this.toAmount

        break
      }
    }
  }

  onSwapCurrency() {
    let tempValue = this.fromValue
    this.fromValue = this.toValue
    this.toValue = tempValue

    let tempAmount = this.fromAmount
    this.fromAmount = this.toAmount
    this.toAmount = tempAmount
    this.onChangeCurrency()
  }
}
