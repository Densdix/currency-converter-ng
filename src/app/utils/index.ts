//https://raw.githubusercontent.com/ourworldincode/currency/main/currencies.json

export const ISO4217 = [
  {
    "ISO": "UAH",
    "name": "Ukrainian Hryvnia",
    "demonym": "Ukrainian",
    "majorSingle": "Hryvnia",
    "majorPlural": "Hryvnias",
    "ISOnum": 980,
    "symbol": "₴",
    "symbolNative": "грн",
    "minorSingle": "Kopiyka",
    "minorPlural": "kopiyky",
    "ISOdigits": 2,
    "decimals": 2,
    "numToBasic": 100
  },
  {
    "ISO": "USD",
    "name": "United States Dollar",
    "demonym": "US",
    "majorSingle": "Dollar",
    "majorPlural": "Dollars",
    "ISOnum": 840,
    "symbol": "$",
    "symbolNative": "$",
    "minorSingle": "Cent",
    "minorPlural": "Cents",
    "ISOdigits": 2,
    "decimals": 2,
    "numToBasic": 100
  },
  {
    "ISO": "EUR",
    "name": "Euro",
    "demonym": "",
    "majorSingle": "Euro",
    "majorPlural": "Euros",
    "ISOnum": 978,
    "symbol": "€",
    "symbolNative": "€",
    "minorSingle": "Cent",
    "minorPlural": "Cents",
    "ISOdigits": 2,
    "decimals": 2,
    "numToBasic": 100
  },
]

export const ISONumConverter = (ISOName: string) => {
  let ISOCorrectCode = 0
  ISO4217.map(el => {
    if (el.ISO === ISOName)
      ISOCorrectCode = el.ISOnum
  })
  return ISOCorrectCode
}
