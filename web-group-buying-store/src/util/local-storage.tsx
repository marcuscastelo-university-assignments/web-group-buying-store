import { ProductProps } from "../components/ProductCard";
import { CartProductProps } from "../pages/Cart";

const LS_KEYS = {
    CART_ITEMS: 'cart-items',
    PRODUCTS: 'products'
};

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
    return JSON.parse(localStorage.getItem(LS_KEYS.PRODUCTS) ?? '{}') as { [productID: string]: (ProductProps | undefined) }
}