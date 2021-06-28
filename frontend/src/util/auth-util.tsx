import { getUser } from "./local-storage";

export function isAuth() {
    return getCurrentUserNick() !== '';
}

export function getCookie(cookieName: string) {
    return document.cookie.split(';').find(a=>a.trim().startsWith(`${cookieName}=`))?.split('=')[1];
}

export function getCurrentUserNick() {
    return getCookie('user') ?? ''
}

export function deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}= ;  expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function isAdmin() {
    return (getCookie('admin') ?? 'false') === 'true'
}

export const login = (userNick: string, password: string) => {
    logout();

    const user = getUser(userNick);
    if (!user) {
        alert('User does not exist')
        return false;
    }

    if (user.password !== password) {
        alert('Wrong passord')
        return false;
    }

    document.cookie = 'user='+user.nick;
    document.cookie = 'password='+user.password;
    if (user.admin) document.cookie = 'admin=true';
    
    return true;
}

export function logout() {
    deleteCookie('user');
    deleteCookie('password');
    deleteCookie('admin');
}