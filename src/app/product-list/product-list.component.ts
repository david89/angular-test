import { Component } from '@angular/core';

import { Product } from '../product';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = products;

  share() {
    // TODO: improve the share functionality to do something useful.
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    // TODO: improve the notify functionality to do something useful.
    window.alert('You will be notified when the product goes on sale.');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
