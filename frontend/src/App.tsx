import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import MainPage from './pages/MainPage';

import 'bootstrap'
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductPage from './pages/Product';
import CreateProductPage from './pages/CreateProduct';
import { generateMockCategories } from './util/mock-categories';
import { getProducts, updateProducts } from './util/local-storage';
import { ProductCommentInfo, ProductProps } from './types';

//This is a temporary function used to simulate server-side interacion.
//TODO: remove on last assignment
function injectProductsToLocalStorage() {
    const mockComments: ProductCommentInfo[] = [
        {
            author: {
                name: 'Magalu',
                email: 'mock@magal.com',
                nick: 'magalu',
                profileImage: 'https://tiao-a.magazineluiza.com.br/img/lu-header.png',
                birthday: '2',
                password: '1212s'
            },
            rating: 1,
            title: 'Odiei',
            content: 'Pior produto que já comprei na vida!!!',
            likes: 1,
            dislikes: 10,
            id: "1"
        },
        // {
        //     author: {
        //         name: 'Bowser',
        //         email: 'mock@magal.com',
        //         nick: 'magalu',
        //         profileImage: 'data:image/jpeg;base64,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'
        //     },
        //     rating: 5,
        //     title: 'Amei',
        //     content: 'Produto maléfico',
        //     likes: 1,
        //     dislikes: 10,
        // },
        // {
        //     author: {
        //         name: 'Teste',
        //         email: 'mock@magal.com',
        //         nick: 'magalu',
        //         profileImage: 'https://preview.redd.it/3z7xhbeewco21.jpg?auto=webp&s=ea37b9974dd174d31dcd4b9cf675e2e3a18e75d2'
        //     },
        //     rating: 5,
        //     title: 'Amei',
        //     content: 'Produto maléfico',
        //     likes: 1,
        //     dislikes: 10,
        // },
        // {
        //     author: {
        //         name: 'Teste',
        //         email: 'mock@magal.com',
        //         nick: 'magalu',
        //         profileImage: 'https://i.pinimg.com/originals/25/e5/b7/25e5b790deb5ca124fcac48f0cc655a1.jpg'
        //     },
        //     rating: 5,
        //     title: 'Amei',
        //     content: 'Produto maléfico',
        //     likes: 1,
        //     dislikes: 10,
        // }
    ]

    const products: {[key: string]: ProductProps}= {
        "41e5b333": 
        {
            productID: '41e5b333',
            currentQuantity: 14,
            imageURL: '/img/products/notebookacer.jpg',
            category: '11com',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Notebook",
            comments: {
                "1": mockComments[0]
            }
        },
        "790dd7e3": 
        {
            productID: '790dd7e3',
            currentQuantity: 7,
            category: '11ac',
            imageURL: '/img/products/liquidificador.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Liquidificador",
            comments: {}
        },
        "790dd7e5": 
        {
            productID: '790dd7e5',
            currentQuantity: 7,
            category: '11arc',
            imageURL: '/img/products/arcondicionadolg.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ar condicionado LG",
            comments: {}
        },
        "790ddde5": 
        {
            productID: '790ddde5',
            currentQuantity: 7,
            category: '11arc',
            imageURL: '/img/products/arcondicionadofreehome.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ar condicionado Free Home",
            comments: {}
        },
        "28221d6d": 
        {
            productID: '28221d6d',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/asadeborboleta.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Asas de borboleta",
            comments: {}
        },
        "2821346d": 
        {
            productID: '2821346d',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/sofaoasis.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sofa Oasis",
            comments: {}
        },
        "28223d6d": 
        {
            productID: '28223d6d',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/sofasaopaulo.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sofa Sao Paulo",
            comments: {}
        },
        "28223dss": 
        {
            productID: '28223dss',
            currentQuantity: 10,
            category: '11ven',
            imageURL: '/img/products/ventiladorbasicplus.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ventilador Basic+",
            comments: {}
        },
        "28223dqw": 
        {
            productID: '28223dqw',
            currentQuantity: 10,
            category: '11ven',
            imageURL: '/img/products/ventiladormallory.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ventilador Mallory",
            comments: {}
        },
        "282232qw": 
        {
            productID: '282232qw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/armariorosa.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Armário Rosa 2 portas",
            comments: {}
        },
        "28211dqw": 
        {
            productID: '28211dqw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/armariomarrom.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Armário marrom 2 portas",
            comments: {}
        },
        "282ttdqw": 
        {
            productID: '282ttdqw',
            currentQuantity: 10,
            category: '11cel',
            imageURL: '/img/products/celulargalaxy.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Celular Galaxy A72",
            comments: {}
        },
        "28215dqw": 
        {
            productID: '28215dqw',
            currentQuantity: 10,
            category: '11cel',
            imageURL: '/img/products/celulariphone.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Iphone 7 Plus",
            comments: {}
        },
        "28216dqw": 
        {
            productID: '28216dqw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/cadeiraescritorio1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cadeira de Escritório Presidente Giratória Preta",
            comments: {}
        },
        "28217dqw": 
        {
            productID: '28217dqw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/cadeiraescritorio2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cadeira de Escritório Executiva Branca",
            comments: {}
        },
        "28218dqw": 
        {
            productID: '28218dqw',
            currentQuantity: 10,
            category: '11lav',
            imageURL: '/img/products/lavadora1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Lavadora Newman 12kg 110V",
            comments: {}
        },
        "28219dqw": 
        {
            productID: '28219dqw',
            currentQuantity: 10,
            category: '11lav',
            imageURL: '/img/products/lavadora2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Lavadora Brastemp Inox 15kg 110V",
            comments: {}
        },
        "32240dzw": 
        {
            productID: '32240dzw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/escrivaninha1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Escrivaninha Branca 1 Porta e 1 Gaveta",
            comments: {}
        },
        "32241dzw": 
        {
            productID: '32241dzw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/escrivaninha2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Escrivaninha de Madeira Natural",
            comments: {}
        },
        "32242dzw": 
        {
            productID: '32242dzw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/gaveteiro1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Gaveteiro 4 Gavetas Branco Acetinado",
            comments: {}
        },
        "32243dzw": 
        {
            productID: '32243dzw',
            currentQuantity: 10,
            category: '11bath',
            imageURL: '/img/products/gaveteiro2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Gaveteiro Pietra 3 Gavetas Preto",
            comments: {}
        },
        "32244dzw": 
        {
            productID: '32244dzw',
            currentQuantity: 10,
            category: '11tel',
            imageURL: '/img/products/tv1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "TV LED 43 Panasonic TC-FS500B Full HD",
            comments: {}
        },
        "32245dzw": 
        {
            productID: '32245dzw',
            currentQuantity: 10,
            category: '11tel',
            imageURL: '/img/products/tv2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Smart TV Crystal LED 50 Samsung 50TU8000 4K",
            comments: {}
        },
        "32246dzw": 
        {
            productID: '32246dzw',
            currentQuantity: 10,
            category: '11tab',
            imageURL: '/img/products/tablet1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tablet Samsung A7 10,4 64Gb Preto",
            comments: {}
        },
        "32247dzw": 
        {
            productID: '32247dzw',
            currentQuantity: 10,
            category: '11tab',
            imageURL: '/img/products/tablet2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tablet Apple 8a Geração 10,2 128Gb Gold",
            comments: {}
        },
        "32248dzw": 
        {
            productID: '32248dzw',
            currentQuantity: 10,
            category: '11mic',
            imageURL: '/img/products/micro1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Micro-ondas Midea 20L Espelhado 110V",
            comments: {}
        },
        "32249dzw": 
        {
            productID: '32249dzw',
            currentQuantity: 10,
            category: '11mic',
            imageURL: '/img/products/micro2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Micro-ondas LG EasyClean 30L 220V",
            comments: {}
        },
        "33002lkg": 
        {
            productID: '33002lkg',
            currentQuantity: 10,
            category: '11sec',
            imageURL: '/img/products/secador1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Secador MQ Profissional Íon 2100W 220V",
            comments: {}
        },
        "33003lkg": 
        {
            productID: '33003lkg',
            currentQuantity: 10,
            category: '11sec',
            imageURL: '/img/products/secador2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Secador Taiff Black Íon 2000W 110V",
            comments: {}
        },
        "33004lkg": 
        {
            productID: '33004lkg',
            currentQuantity: 10,
            category: '11com',
            imageURL: '/img/products/computador2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Computador 3green All-in-One 24,5 Full HD Intel Dual Core 8Gb HD 500Gb",
            comments: {}
        },
        "33005lkg": 
        {
            productID: '33005lkg',
            currentQuantity: 10,
            category: '11bon',
            imageURL: '/img/products/bone1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Boné Adidas Aba Curva Strapback Preto e Branco Unissex",
            comments: {}
        },
        "33006lkg": 
        {
            productID: '33006lkg',
            currentQuantity: 10,
            category: '11bon',
            imageURL: '/img/products/bone2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Boné Viko Básico Preto Masculino",
            comments: {}
        },
        "33007lkg": 
        {
            productID: '33007lkg',
            currentQuantity: 10,
            category: '11cas',
            imageURL: '/img/products/camisa1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Camiseta Lisa Preta 100% Algodão Masculina",
            comments: {}
        },
        "33019lkg": 
        {
            productID: '33019lkg',
            currentQuantity: 10,
            category: '11cas',
            imageURL: '/img/products/camisa2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Camisa Manda Longa Listrada Rosa Feminina",
            comments: {}
        },
        "33020lkg": 
        {
            productID: '33020lkg',
            currentQuantity: 10,
            category: '11blu',
            imageURL: '/img/products/blusa1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Blusa Cropped Gola Manga Curta Preta Feminina",
            comments: {}
        },
        "33021lkg": 
        {
            productID: '33021lkg',
            currentQuantity: 10,
            category: '11blu',
            imageURL: '/img/products/blusa2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Blusa Modal Plus Manga Longa Vinho Feminina",
            comments: {}
        },
        "33022lkg": 
        {
            productID: '33022lkg',
            currentQuantity: 10,
            category: '11cal',
            imageURL: '/img/products/calca1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Calça de Moletom Preta Masculina",
            comments: {}
        },
        "33023lkg": 
        {
            productID: '33023lkg',
            currentQuantity: 10,
            category: '11cal',
            imageURL: '/img/products/calca2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Calça Jeans Ballon Azul Feminina",
            comments: {}
        },
        "33024lkg": 
        {
            productID: '33024lkg',
            currentQuantity: 10,
            category: '11ten',
            imageURL: '/img/products/tenis1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tênis Nike SB Charge Preto Masculino",
            comments: {}
        },
        "33025lkg": 
        {
            productID: '33025lkg',
            currentQuantity: 10,
            category: '11ten',
            imageURL: '/img/products/tenis2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tênis Adidas Breaknet Branco Feminino",
            comments: {}
        },
        "33026lkg": 
        {
            productID: '33026lkg',
            currentQuantity: 10,
            category: '11chi',
            imageURL: '/img/products/chinelo1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chinelo Olympikus 921 Preto e Laranja Masculino",
            comments: {}
        },
        "33027lkg": 
        {
            productID: '33027lkg',
            currentQuantity: 10,
            category: '11chi',
            imageURL: '/img/products/chinelo2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chinelo Fila Drifter Basic Rosa Feminino",
            comments: {}
        },
        "35221pcg": 
        {
            productID: '35221pcg',
            currentQuantity: 10,
            category: '11cer',
            imageURL: '/img/products/cereal1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cereal Matinal Kellogg's Original 250g",
            comments: {}
        },
        "35222pcg": 
        {
            productID: '35222pcg',
            currentQuantity: 10,
            category: '11cer',
            imageURL: '/img/products/cereal2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cereal Matinal Superbom Super Balls 200g",
            comments: {}
        },
        "35223pcg": 
        {
            productID: '35223pcg',
            currentQuantity: 10,
            category: '11car',
            imageURL: '/img/products/carne1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Bife de Coxão Mole 500g",
            comments: {}
        },
        "35224pcg": 
        {
            productID: '35224pcg',
            currentQuantity: 10,
            category: '11car',
            imageURL: '/img/products/carne2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Picanha Bovina Maturatta Embalada a Vácuo 1Kg",
            comments: {}
        },
        "35225pcg": 
        {
            productID: '35225pcg',
            currentQuantity: 10,
            category: '11pei',
            imageURL: '/img/products/peixe1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Truta Defumada e Curada 350g",
            comments: {}
        },
        "35226pcg": 
        {
            productID: '35226pcg',
            currentQuantity: 10,
            category: '11pei',
            imageURL: '/img/products/peixe2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Filé de Salmão Congelado 300g",
            comments: {}
        },
        "35227pcg": 
        {
            productID: '35227pcg',
            currentQuantity: 10,
            category: '11bol',
            imageURL: '/img/products/bolacha1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Bolacha Maria Isabela 400g",
            comments: {}
        },
        "35228pcg": 
        {
            productID: '35228pcg',
            currentQuantity: 10,
            category: '11bol',
            imageURL: '/img/products/bolacha2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Bolacha Bono Nestlé Chocolate 126g",
            comments: {}
        },
        "35229pcg": 
        {
            productID: '35229pcg',
            currentQuantity: 10,
            category: '11cho',
            imageURL: '/img/products/chocolate1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chocolate Nestlé Suflair 130g",
            comments: {}
        },
        "35230pcg": 
        {
            productID: '35230pcg',
            currentQuantity: 10,
            category: '11cho',
            imageURL: '/img/products/chocolate2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chocolate Garoto Talento Castanha-do-Pará 25g",
            comments: {}
        },
        "35231pcg": 
        {
            productID: '35231pcg',
            currentQuantity: 10,
            category: '11sov',
            imageURL: '/img/products/sorvete1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sorvete Kibon Cremosíssimo 4 em 1 Tropical 1.5L",
            comments: {}
        },
        "35232pcg": 
        {
            productID: '35232pcg',
            currentQuantity: 10,
            category: '11sov',
            imageURL: '/img/products/sorvete2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sorvete Garoto Chocolate 1.5L",
            comments: {}
        },
        "56s21jzw": 
        {
            productID: '56s21jzw',
            currentQuantity: 10,
            category: '111pla',
            imageURL: '/img/products/placa1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Placa-Mãe AMD Gigabyte Aorus B550M DDR4 AM4 mATX",
            comments: {}
        },
        "56s22jzw": 
        {
            productID: '56s22jzw',
            currentQuantity: 10,
            category: '111pla',
            imageURL: '/img/products/placa2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Placa-Mãe ASUS TUF B460M Intel LGA1200 10a Geração DDR4 mATX",
            comments: {}
        },
        "56s23jzw": 
        {
            productID: '56s23jzw',
            currentQuantity: 10,
            category: '111pro',
            imageURL: '/img/products/processador1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Processador Inter-Core i9-10850K Cache 20Mb 3.6GHz (5.2 GHz Turbo) LGA1200",
            comments: {}
        },
        "56s24jzw": 
        {
            productID: '56s24jzw',
            currentQuantity: 10,
            category: '111pro',
            imageURL: '/img/products/processador2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Processador AMD Ryzen 9 5900X Cache 70Mb 3.7GHz (4.8 GHz Turbo) AM4",
            comments: {}
        },
        "56s25jzw": 
        {
            productID: '56s25jzw',
            currentQuantity: 10,
            category: '111fon',
            imageURL: '/img/products/fonte1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Fonte EVGA 600W 80 Plus Bronze Semi-Modular com PFC Ativo",
            comments: {}
        },
        "56s26jzw": 
        {
            productID: '56s26jzw',
            currentQuantity: 10,
            category: '111fon',
            imageURL: '/img/products/fonte2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Fonte Corsair CV Series 650W 80 Plus Bronze",
            comments: {}
        },
        "56s27jzw": 
        {
            productID: '56s27jzw',
            currentQuantity: 10,
            category: '111mem',
            imageURL: '/img/products/memoria1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Memória RAM HyperX Fury 8Gb DDR4 2666MHz CL16",
            comments: {}
        },
        "56s28jzw": 
        {
            productID: '56s28jzw',
            currentQuantity: 10,
            category: '111mem',
            imageURL: '/img/products/memoria2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Memória RAM para Notebook Team Group T-Force Vulcan 8Gb DDR4 2666MHz CL18",
            comments: {}
        },
    };
    updateProducts({...getProducts() as {[key: string]: ProductProps}, ...products});
}

function injectCategoriesToLocalStorage() {
    const layers = generateMockCategories();
    localStorage.setItem('categories', JSON.stringify(layers));
}

function App() {
    injectProductsToLocalStorage();
    injectCategoriesToLocalStorage();
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/create_product" exact component={CreateProductPage}/>
                    <Route path="/cart" exact component={CartPage}/>

                    {/* <Route path="/" component={NotFoundPage}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
