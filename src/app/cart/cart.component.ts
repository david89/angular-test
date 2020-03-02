import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { CartService } from "../cart.service";
import { Product } from "../product";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  products: Product[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

  onSubmit(customerData: any): void {
    this.products = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
