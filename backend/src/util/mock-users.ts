//one admin user and one client user
export function genMockUsers() {
    return [
        {
            "name": "Magalu",
            "nick": "magalu",
            "password": "Az1234567890",
            "birthday": "28-06-2021",
            "email": "magazine@luiza.mgl",
            "profileImage": "https://tiao-a.magazineluiza.com.br/img/lu-header.png",
            "admin": false
        },
        {
            "name": "Admninastor",
            "nick": "admin",
            "password": "admin",
            "birthday": "28-06-2021",
            "email": "admin@admin.adm",
            "profileImage": "",
            "admin": true
        }
    ]
}