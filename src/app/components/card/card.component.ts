import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';
import { MathService } from 'src/shared/services/math.service';
import { IcardProductInfo, IcartItem, Iproduct, taxListType } from 'src/shared/types_enums_and_interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  isDataLoaded: boolean = false;
  cardProducts: Array<IcardProductInfo> = [];
  @Input() cartData: Array<IcartItem> =  [];


  constructor(private dataService: DataService, private mathService: MathService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    setTimeout(() => {
      this.cartData.forEach((item) => {
        this.cardProducts.push({
          product: this.dataService.getOneProductById(item.productId),
          qty: item.qty
        })
      })
      this.isDataLoaded = true;
    }, 500);
    
  }


  getOneProductLineTotalTaxes(product: Iproduct, quantity: number): number {
    // initial tax amount
    let oneProductTaxAmount = 0;
    let taxList: taxListType = product.taxes;
    // For each product add the paid tax to the initial tax amount
    Object.values(taxList).forEach((value) => {
      let tax: number = value / 100;
      let addedToPrice = tax * product.price;
      let roundedAddedToPrice = this.mathService.roundTax(addedToPrice);
      oneProductTaxAmount += roundedAddedToPrice;
    })

    return quantity * oneProductTaxAmount;
  }

  getTotalTaxes(): number {
    let totalTaxes = 0;
    this.cardProducts.forEach((item) => {
      let oneProductTaxAmount = this.getOneProductLineTotalTaxes(item.product!, item.qty)
      totalTaxes += oneProductTaxAmount;
    })

    return totalTaxes;
  } 

  getOneProductTTCprice(cardProductInfo : IcardProductInfo): number {
    // initial price
    const htPrice = cardProductInfo.product!.price;
    const ttcPrice = htPrice * cardProductInfo.qty + this.getOneProductLineTotalTaxes(cardProductInfo.product!, cardProductInfo.qty);
    
    return (Math.round(100*ttcPrice))/100;
  }

  getTotalTTCPrice(): number {
    
    return this.cardProducts.reduce(
      (prev, acc) => prev + this.getOneProductTTCprice(acc)
    , 0)
  }



}
