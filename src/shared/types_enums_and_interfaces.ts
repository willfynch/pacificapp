export interface Iproduct {
    _id: number;
    name: string;
    type: string;
    imported: boolean;
    price: number;
    taxes: taxListType;
}

export interface IcartItem {
    productId: number;
    qty: number;
}

export interface IcardProductInfo {
    product: Iproduct | undefined,
    qty: number
}

export type taxListType = {

    [name: string]: number

}

export enum productType {
    books = 'Livres',
    music = 'Musique',
    food = 'Nourriture',
    cosmetics = 'Cosmétiques',
    pharmaceutics = 'Médicaments',
}