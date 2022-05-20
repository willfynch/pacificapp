import { Injectable } from '@angular/core';
import { IcartItem, Iproduct } from '../types_enums_and_interfaces';
import { productList, cartList } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getOneProductById(id: number): Iproduct | undefined {

    let product: Iproduct | undefined;
    try {
      product = productList.find((item) => item._id === id);
    }
    catch(err){
      console.log('Err occured, this product does not exist\n ', err);
    }
  
    return product;
  }

  getAllCarts(): Array<IcartItem[]> {
    let allCarts: Array<IcartItem[]> = []
    cartList.forEach((item: IcartItem[]) => allCarts.push(item));
    return allCarts;
  } 

}
