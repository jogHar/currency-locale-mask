
# Locale Currency Mask
This library use for currency masking with locale in angular.

[Stackblitz](https://stackblitz.com/edit/currency-locale-mask)

## How to use
1. Install npm package.
``` terminal
npm install currency-locale-mask
```
2.  Import **LocaleCurrencyMaskModule** in module. 
3.  Below field use in HTML
  - ngCurrencyMask - selector
  - code - ex. 'USD', 'EUR'
  - locale - ex. 'en-US', 'de-DE'
``` terminal
<input  ngCurrencyMask  code="USD"  locale="en-US"  formControlName="currencyEN">
<input  ngCurrencyMask  code="USD"  locale="de-DE"  formControlName="currencyDE">
```
