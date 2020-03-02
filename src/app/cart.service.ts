import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

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

  // TODO: add an interface for shipping prices
  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }
}
