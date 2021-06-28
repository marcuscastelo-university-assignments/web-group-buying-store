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
export function isAdmin() {
    return (getCookie('admin') ?? 'false') === 'true'
}

export const login = (userNick: string, password: string) => {
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
    
    return true;
}