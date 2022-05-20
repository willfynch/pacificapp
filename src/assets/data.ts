/**
 * This file is used to mock the use of real data
 */

import { IcartItem, Iproduct, productType } from "src/shared/types_enums_and_interfaces";

export const productList: Array<Iproduct> = [
    {
        _id: 1,
        name: 'Livre',
        type: productType.books,
        imported: false,
        price: 12.49,
        taxes: {
          "TVA":10,
        }
      },
      {
        _id: 2,
        name: 'CD',
        type: productType.music,
        imported: false,
        price: 14.99,
        taxes: {
          "TVA":20,
        }
      },
      {
        _id: 3,
        name: 'Boîte Chocolats 1',
        type: productType.food,
        imported: true,
        price: 10,
        taxes: {
          "Taxe importation":5
        }
      },
      {
        _id: 4,
        name: 'Boîte Chocolats 2',
        type: productType.food,
        imported: true,
        price: 11.25,
        taxes: {
          "Taxe importation":5
        }
      },
      {
        _id: 5,
        name: 'Barre chocolat',
        type: productType.food,
        imported: false,
        price: 0.85,
        taxes: {
          
        }
      },
      {
        _id: 6,
        name: 'Flacon parfum importé 1',
        type: productType.cosmetics,
        imported: true,
        price: 27.99,
        taxes: {
          "TVA":20,
          "Taxe importation":5
        }
      },
      {
        _id: 7,
        name: 'Flacon parfum importé 2',
        type: productType.cosmetics,
        imported: true,
        price: 47.5,
        taxes: {
          "TVA":20,
          "Taxe importation":5
        }
      },
      {
        _id: 8,
        name: 'Flacon parfum FR',
        type: productType.cosmetics,
        imported: false,
        price: 18.99,
        taxes: {
          "TVA":20
        }
      },
      {
        _id: 9,
        name: 'Pilule contre la migraine',
        type: productType.pharmaceutics,
        imported: false,
        price: 9.75,
        taxes: {
          
        }
      }
]


export const cartList: Array<IcartItem[]> = [
  [
    {productId: 1, qty: 2},
    {productId: 2, qty: 1},
    {productId: 5, qty: 3}
  ],
  [
    {productId: 3, qty: 2},
    {productId: 7, qty: 3}
  ],
  [
    {productId: 6, qty: 2},
    {productId: 8, qty: 1},
    {productId: 9, qty: 3},
    {productId: 4, qty: 2},
  ],
]

