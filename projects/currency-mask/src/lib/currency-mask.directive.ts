import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngCurrencyMask]',
  providers: [
    CurrencyPipe
  ]
})
export class CurrencyMaskDirective implements OnInit{

  @Input() code = 'USD';
  @Input() locale = 'en-US';

  constructor(
    private currencyPipe: CurrencyPipe,
    public el: ElementRef,
    private ngControl: NgControl
  ) { }

  ngOnInit(): void {
    this.format(this.el.nativeElement.value);
  }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.format(e);
  }

  @HostListener('ngModelChange') onChange() {
    this.format(this.el.nativeElement.value);
  }
  
   @HostListener('keydown', ['$event']) onKeydown(e) {
    const keyCode = Number(e.keyCode);
    if (keyCode === 8) {
	  e.preventDefault();
      const number = this.el.nativeElement.value.replace(/\D/g, '');
      this.format(number.substring(0, number.length - 1));
    }
  }

  format(val: string) {
    const thenum = val.replace(/\D/g, '');
    const formatted = this.currencyPipe.transform(thenum, this.code, 'symbol', '1.0-0', this.locale);
    this.ngControl.control.setValue(thenum, {
      emitEvent: false,
      emitModelToViewChange: false,
      emitViewToModelChange: false
    });
    this.el.nativeElement.value = formatted;
  }


}
