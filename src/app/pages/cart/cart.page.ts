import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';
import { IcartItem } from 'src/shared/types_enums_and_interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {

  cartItems: Array<IcartItem[]> = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cartItems = this.dataService.getAllCarts();
  }
}
