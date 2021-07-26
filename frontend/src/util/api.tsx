
import { CartProductProps, LayerDescription, ProductCommentInfo, ProductProps, UserProps } from "../types";

import axios, { AxiosError } from 'axios';
import { deleteCookie, getCurrentUserNick } from "./auth-util";

const api = axios.create({
    baseURL: 'http://localhost:3333/api/',
})

const LS_KEYS = {
    CART_ITEMS: 'cart-items',
    PRODUCTS: 'products',
    CATEGORIES: 'categories'
};


export async function removeCartItem(productId: string) {
    try {
        await api.delete(`/cart/${getCurrentUserNick()}/${productId}`);
    } catch (error) {
        console.error(error);
        console.error(error.response);
    }
}

export async function updateCartItem(cartItem: CartProductProps) {
    
}

export async function updateCartItems(cartItems: CartProductProps[]) {
    
}

export async function clearCartItems() {
    await api.delete(`/cart/${getCurrentUserNick()}/clear`);
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

export async function addToCart(productId: string) {
    await api.put(`/cart/${getCurrentUserNick()}/${productId}`);
}




export async function getCartProducts() {
    return (await api.get(`/cart/${getCurrentUserNick()}`)).data as CartProductProps[];
}

export async function getCartProduct(productId: string) {
    return (await getCartProducts()).find(p => p.productId === productId);
}

export async function fetchCategories() {
    const layers = (await api.get('/category')).data;
    localStorage.setItem('categories', JSON.stringify(layers));
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

export async function updateUsers(users: { [nick: string]: (UserProps | undefined) }) {
    localStorage.setItem('users', JSON.stringify(users));
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

export async function login({ nick, password }: { nick: string, password: string }) {
    try {
        const user = (await api.post(`/auth/login`, { nick, password })).data as UserProps;
        
        logout();
        document.cookie = 'user='+user.nick;
        document.cookie = 'password='+user.password;
        document.cookie = `admin=${user.admin ?? false}`;

        return user;

    } catch (_error) {
        const error = _error as AxiosError;
        console.error(error);
        console.error(error.response);

        if (error?.response?.status === 401) {
            alert('Login failed');
            logout();
        }
 
        return null;
    }
}

export async function register(userData: UserProps) {
    return (await api.post(`/auth/register`, userData)).data as UserProps;
}

export function logout() {
    deleteCookie('user');
    deleteCookie('password');
    deleteCookie('admin');
}

export async function getUser(nick: string) {
    try {
        const user = (await api.get(`/user/${nick}`)).data as UserProps;
        return user;
    } catch (error) {
        console.error(error);
        console.error(error.response);

        return null;
    }
}

export async function createComment(productId: string, comment: ProductCommentInfo) {
    try {
        (await api.post(`/product/${productId}/comment`, comment)).data as ProductCommentInfo;
        return true;
    } catch (error) {
        console.error(error);
        console.error(error.response);
        return false;
    }
}

export async function updateComment(productId: string, comment: ProductCommentInfo) {
    try {
        await api.put(`/product/${productId}/comment/${comment.commentId}`, comment);
        return true;
    } catch (error) {
        console.error(error);
        console.error(error.response);
        return false;
    }
}

export async function deleteComment(productId: string, commentId: string) {
    try {
        await api.delete(`/product/${productId}/comment/${commentId}`);
        return true;
    } catch (error) {
        console.error(error);
        console.error(error.response);
        return false;
    }
}




