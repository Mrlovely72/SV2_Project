import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { KHRCurrencyPipe } from '../khr-currency-pipe';

@Component({
  selector: 'app-card-product',
  imports: [KHRCurrencyPipe,CurrencyPipe],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css'
})
export class CardProduct {
  @Input() product: any =[];
}
