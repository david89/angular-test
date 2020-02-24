import { TestBed } from '@angular/core/testing';

import { Product } from './product';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized with an empty list', () => {
    const cart = new CartService();
    expect(cart.getItems()).toEqual([], 'empty at first');
  });

  it('should add products', () => {
    const cart = new CartService();

    const product1: Product = {
      name: 'Test1',
      price: 123,
      description: 'Description',
    };
    cart.addToCart(product1);
    expect(cart.getItems()).toEqual([product1], 'contains two products');

    const product2: Product = {
      name: 'Test2',
      price: 234,
      description: 'Description',
    };
    cart.addToCart(product2);
    expect(cart.getItems()).toEqual([product1, product2], 'contains two products');
  });

  it('should clear products', () => {
    const cart = new CartService();

    const product1: Product = {
      name: 'Test1',
      price: 123,
      description: 'Description',
    };
    cart.addToCart(product1);

    expect(cart.clearCart()).toEqual([], 'empty after clear');
    expect(cart.getItems()).toEqual([], 'still empty after clear');
  });
});
