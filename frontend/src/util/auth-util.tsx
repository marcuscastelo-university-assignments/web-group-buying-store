export function isAuth() {
    return document.cookie.includes('user');
}