
import { CartProductProps } from "../pages/Cart";
import { ProductProps, UserProps } from "../types";
import { LayerDescription } from "./mock-categories";

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/api/',
})

const LS_KEYS = {
    CART_ITEMS: 'cart-items',
    PRODUCTS: 'products',
    CATEGORIES: 'categories'
};

export async function removeCartItem(productId: string) {
    // axios.delete(`/product/${productId}`);
}

export async function updateCartItem(cartItem: CartProductProps) {
    // const currItems = getCartItems();
    // const currIdx = currItems.findIndex(c => c.productId === cartItem.productId);

    // if (currIdx === -1) currItems.push(cartItem);
    // else currItems[currIdx] = cartItem;
    // updateCartItems(currItems);

    // axios.put(`//product/${productId}`, )
}

export async function updateCartItems(cartItems: CartProductProps[]) {
    // localStorage.setItem(LS_KEYS.CART_ITEMS, JSON.stringify(cartItems));
}


export async function getProduct(productId: string) {
    try {
        return (await api.get<ProductProps>(`/product/${productId}`)).data;
    }
    catch (e) {
        //TODO: check if is 404
        //If 404, return null
        console.error(e);
        return undefined;
    }
}
//
export async function getProducts() {
    try {
        return (await api.get<ProductProps[]>(`/product`)).data;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function createProduct(product: ProductProps) {
    try {
        return await api.post(`/product`, product);
    } catch (error) {
        console.error(error);
        console.error(error.response);
        return undefined;
    }
}

export async function updateProducts(products: { [productId: string]: ProductProps }) {
    const promises = []
    for (let productId in products) promises.push(updateProduct(products[productId]));
    await Promise.all(promises);
}

export async function updateProduct(product: ProductProps) {
    try {
        await api.put(`/product/${product.productId}`, product);
    } catch (error) {
        console.error(error);
        console.error(error.response);
    }
}

export async function removeProduct(productId: string) {
    await api.delete(`/product/${productId}`);
}

//
export function getCartItems() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CART_ITEMS) ?? '[]') as CartProductProps[];
}

export function getCartItem(productId: string) {
    return getCartItems().find(p => p.productId === productId);
}

export function getCategories() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CATEGORIES) ?? '{}') as { [layer: string]: (LayerDescription) };
}

export function getCategoriesInLayer(layerID: string) {
    return getCategories()[layerID];
}

export function getCategoryInLayer(layerID: string, categoryId: string) {
    return getCategories()[layerID]?.find(c => c.id === categoryId);
}

export function getUsers() {
    return JSON.parse(localStorage.getItem('users') ?? '{}') as { [nick: string]: (UserProps | undefined) };
}

export function getUser(nick: string) {
    return getUsers()[nick];
}

export async function updateUsers(users: { [nick: string]: (UserProps | undefined) }) {
    localStorage.setItem('users', JSON.stringify(users));
}

export async function registerUser(newUser: UserProps, overwrite?: boolean) {
    // if (!overwrite && getUser(newUser.nick)) {
    //     //TODO: try catch?
    //     console.error('User already exists');
    //     return false;
    // }

    // const users = getUsers();
    // users[newUser.nick] = newUser;
    // updateUsers(users);

    // return true;
}

export function generateProductID() {
    const id = (parseInt(localStorage.getItem('last-product-id') ?? '0') + 1).toString();
    localStorage.setItem('last-product-id', id);
    return id;
}

export function generateCommentID() {
    const id = (parseInt(localStorage.getItem('last-comment-id') ?? '0') + 1).toString();
    localStorage.setItem('last-comment-id', id);
    return id;
}