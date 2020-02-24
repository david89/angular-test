import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.products.push(product);
  }

  getItems(): Product[] {
    return this.products;
  }

  clearCart(): Product[] {
    this.products = [];
    return this.products;
  }
}
