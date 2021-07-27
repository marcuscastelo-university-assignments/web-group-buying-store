import { model, Schema, Document } from 'mongoose';

//the cart save the string about the products and the quantity
interface CartProduct { 
    productId: string,
    quantity: number,
}

export interface CartProductModel extends CartProduct, Document { }

//Typescript definition:
interface Cart {
    nick: string,
    products: CartProductModel[]
};

export interface CartModel extends Cart, Document { }

//Create mongoose schema from Cart interface
export const CartSchema = new Schema(
    {
        nick: {
            type: String,
            unique: true,   //one cart by user
        },
        products: [
            {
                productId: String,
                quantity: Number,
            },
        ],
    }
);

//Export model
export default model<CartModel>('Cart', CartSchema);