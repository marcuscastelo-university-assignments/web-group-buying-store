
import { CartProductProps } from "../pages/Cart";
import { ProductProps, UserProps } from "../types";
import { LayerDescription } from "./mock-categories";

const LS_KEYS = {
    CART_ITEMS: 'cart-items',
    PRODUCTS: 'products',
    CATEGORIES: 'categories'
};

export function removeCartItem(productID: string) {
    const currItems = getCartItems();
    const idx = currItems.findIndex(it => it.productID === productID);
    if (idx >= 0) currItems.splice(idx, 1);
    updateCartItems(currItems);
}

export function updateCartItem(cartItem: CartProductProps) {
    const currItems = getCartItems();
    const currIdx = currItems.findIndex(c => c.productID === cartItem.productID);

    if (currIdx === -1) currItems.push(cartItem);
    else currItems[currIdx] = cartItem;
    updateCartItems(currItems);
}

export function updateCartItems(cartItems: CartProductProps[]) {
    localStorage.setItem(LS_KEYS.CART_ITEMS, JSON.stringify(cartItems));
}

export function updateProducts(products: { [productID: string]: ProductProps }) {
    localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(products));
}

export function updateProduct(product: ProductProps) {
    const currProds = getProducts();
    currProds[product.productID] = product;
    updateProducts(currProds);
}

export function removeProduct(productID: string) {
    const products = getProducts();
    delete products[productID];
    updateProducts(products);
}

export function getCartItems() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CART_ITEMS) ?? '[]') as CartProductProps[];
}

export function getCartItem(productID: string) {
    return getCartItems().find(p => p.productID === productID);
}

export function getProduct(productID: string) {
    return getProducts()[productID];
}

export function getProducts() {
    return JSON.parse(localStorage.getItem(LS_KEYS.PRODUCTS) ?? '{}') as { [productID: string]: (ProductProps) }
}


export function getCategories() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CATEGORIES) ?? '{}') as { [layer: string] : (LayerDescription) };
}

export function getCategoriesInLayer(layerID: string) {
    return getCategories()[layerID];
}

export function getCategoryInLayer(layerID: string, categoryID: string) {
    return getCategories()[layerID]?.find(c=> c.id === categoryID);
}

export function getUsers() {
    return JSON.parse(localStorage.getItem('users') ?? '{}') as {[nick: string] : (UserProps | undefined)};
}

export function getUser(nick: string) {
    return getUsers()[nick];
}

export function updateUsers(users: {[nick: string] : (UserProps|undefined)}) {
    localStorage.setItem('users', JSON.stringify(users));
} 

export function registerUser(newUser: UserProps) {
    if (getUser(newUser.nick)) {
        //TODO: try catch?
        console.error('User already exists');
        return false;
    }

    const users = getUsers();
    users[newUser.nick] = newUser;
    updateUsers(users);

    return true;
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