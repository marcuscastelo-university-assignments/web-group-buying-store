import { getUser } from "./local-storage";

export function isAuth() {
    return document.cookie.includes('user');
}

export function getCurrentUser() {
    return document.cookie.split(';').find(a=>a.trim().startsWith('user='))?.split('=')[1]??'as';
}
export function isAdmin() {
    return document.cookie.split(';').find(a=>a.startsWith('admin='))?.split('=')[1] === 'true';
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