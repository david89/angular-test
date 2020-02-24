import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}
