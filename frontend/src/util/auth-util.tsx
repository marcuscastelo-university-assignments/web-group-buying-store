import { FormEventHandler } from "react";
import { getUser } from "./local-storage";

export function isAuth() {
    return document.cookie.includes('user');
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