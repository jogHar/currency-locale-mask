import { NgModule } from '@angular/core';
import { CurrencyMaskComponent } from './currency-mask.component';
import { CurrencyMaskDirective } from './currency-mask.directive';

@NgModule({
  declarations: [CurrencyMaskComponent, CurrencyMaskDirective],
  imports: [
  ],
  exports: [CurrencyMaskComponent, CurrencyMaskDirective]
})
export class CurrencyMaskModule { }
