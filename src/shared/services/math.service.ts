import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }


  roundTax(taxedAmount: number) : number{

    // Initialize taxed amount
    let roundedTaxedAmount: number = taxedAmount;
    const tenTimesTaxedAmount = taxedAmount * 10;
    const flooredTenTimesTaxedAmount = Math.floor(tenTimesTaxedAmount);
    const nLessFloor = tenTimesTaxedAmount - flooredTenTimesTaxedAmount;


    if(nLessFloor > 0.5){
      roundedTaxedAmount = flooredTenTimesTaxedAmount + 1;
    }

    if(nLessFloor === 0){
      roundedTaxedAmount = flooredTenTimesTaxedAmount;
    }

    if (nLessFloor < 0.5 && nLessFloor > 0 ){
      roundedTaxedAmount = flooredTenTimesTaxedAmount + 0.5;
    }

    roundedTaxedAmount = Math.floor(100*roundedTaxedAmount)/100

    return roundedTaxedAmount/10;
  }

}
