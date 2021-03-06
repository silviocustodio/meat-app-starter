import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartservice: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartservice.items;
  }

  total(): number {
    return this.shoppingCartservice.total();
  }

  clear() {
   this.shoppingCartservice.clear();
  }

  removeItem(item: any) {
   this.shoppingCartservice.removeItem(item);
  }

  addItem(item: any) {
   this.shoppingCartservice.addItem(item);
  }
}
