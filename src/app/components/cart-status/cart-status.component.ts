import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [CommonModule,RouterModule,NgbModule],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent implements OnInit{
  totalPrice:number = 0.00;
  totalQuantity:number = 0;
  constructor(private cartService:CartService) {
  }
  ngOnInit(): void {
    this.updateCartStatus();
  }

  private updateCartStatus() {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

  }
}
