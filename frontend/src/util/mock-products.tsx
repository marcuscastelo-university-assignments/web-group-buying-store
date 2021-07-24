import { ProductProps } from "../types";

export function genMockProducts() {

    const mockComments = [{
        author: 'magalu',
        rating: 1,
        title: 'Odiei',
        content: 'Pior produto que já comprei na vida!!!',
        likes: 1,
        dislikes: 10,
        id: "1",
    }];

    const products: {[key: string]: ProductProps}= {
        "41e5b333": 
        {
            productId: '41e5b333',
            currentQuantity: 14,
            imageURL: '/img/products/notebookacer.jpg',
            categoryId: '111com',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Notebook",
            comments: [mockComments[0]],
            creator: 'magalu'
        },
        "790dd7e3": 
        {
            productId: '790dd7e3',
            currentQuantity: 7,
            categoryId: '1ele',
            imageURL: '/img/products/liquidificardophilips.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Liquidificador",
            comments: [],
            creator: 'magalu'
        },
        "790dd7e5": 
        {
            productId: '790dd7e5',
            currentQuantity: 7,
            categoryId: '11arc',
            imageURL: '/img/products/arcondicionadolg.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ar condicionado LG",
            comments: [],
            creator: 'magalu'
        },
        "790ddde5": 
        {
            productId: '790ddde5',
            currentQuantity: 7,
            categoryId: '11arc',
            imageURL: '/img/products/arcondicionadofreehome.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ar condicionado Free Home",
            comments: [],
            creator: 'magalu'
        },
        "2821346d": 
        {
            productId: '2821346d',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/sofaoasis.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sofa Oasis",
            comments: [],
            creator: 'magalu'
        },
        "28223d6d": 
        {
            productId: '28223d6d',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/sofasaopaulo.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sofa Sao Paulo",
            comments: [],
            creator: 'magalu'
        },
        "28223dss": 
        {
            productId: '28223dss',
            currentQuantity: 10,
            categoryId: '11ven',
            imageURL: '/img/products/ventiladorbasicplus.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ventilador Basic+",
            comments: [],
            creator: 'magalu'
        },
        "28223dqw": 
        {
            productId: '28223dqw',
            currentQuantity: 10,
            categoryId: '11ven',
            imageURL: '/img/products/ventiladormallory.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Ventilador Mallory",
            comments: [],
            creator: 'magalu'
        },
        "282232qw": 
        {
            productId: '282232qw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/armariorosa.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Armário Rosa 2 portas",
            comments: [],
            creator: 'magalu'
        },
        "28211dqw": 
        {
            productId: '28211dqw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/armariomarrom.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Armário marrom 2 portas",
            comments: [],
            creator: 'magalu'
        },
        "282ttdqw": 
        {
            productId: '282ttdqw',
            currentQuantity: 10,
            categoryId: '11cel',
            imageURL: '/img/products/celulargalaxy.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Celular Galaxy A72",
            comments: [],
            creator: 'magalu'
        },
        "28215dqw": 
        {
            productId: '28215dqw',
            currentQuantity: 10,
            categoryId: '11cel',
            imageURL: '/img/products/celulariphone.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Iphone 7 Plus",
            comments: [],
            creator: 'magalu'
        },
        "28216dqw": 
        {
            productId: '28216dqw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/cadeiraescritorio1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cadeira de Escritório Presidente Giratória Preta",
            comments: [],
            creator: 'magalu'
        },
        "28217dqw": 
        {
            productId: '28217dqw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/cadeiraescritorio2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cadeira de Escritório Executiva Branca",
            comments: [],
            creator: 'magalu'
        },
        "28218dqw": 
        {
            productId: '28218dqw',
            currentQuantity: 10,
            categoryId: '11lav',
            imageURL: '/img/products/lavadora1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Lavadora Newman 12kg 110V",
            comments: [],
            creator: 'magalu'
        },
        "28219dqw": 
        {
            productId: '28219dqw',
            currentQuantity: 10,
            categoryId: '11lav',
            imageURL: '/img/products/lavadora2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Lavadora Brastemp Inox 15kg 110V",
            comments: [],
            creator: 'magalu'
        },
        "32240dzw": 
        {
            productId: '32240dzw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/escrivaninha1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Escrivaninha Branca 1 Porta e 1 Gaveta",
            comments: [],
            creator: 'magalu'
        },
        "32241dzw": 
        {
            productId: '32241dzw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/escrivaninha2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Escrivaninha de Madeira Natural",
            comments: [],
            creator: 'magalu'
        },
        "32242dzw": 
        {
            productId: '32242dzw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/gaveteiro1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Gaveteiro 4 Gavetas Branco Acetinado",
            comments: [],
            creator: 'magalu'
        },
        "32243dzw": 
        {
            productId: '32243dzw',
            currentQuantity: 10,
            categoryId: '1ele',
            imageURL: '/img/products/gaveteiro2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Gaveteiro Pietra 3 Gavetas Preto",
            comments: [],
            creator: 'magalu'
        },
        "32244dzw": 
        {
            productId: '32244dzw',
            currentQuantity: 10,
            categoryId: '11tel',
            imageURL: '/img/products/tv1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "TV LED 43 Panasonic TC-FS500B Full HD",
            comments: [],
            creator: 'magalu'
        },
        "32245dzw": 
        {
            productId: '32245dzw',
            currentQuantity: 10,
            categoryId: '11tel',
            imageURL: '/img/products/tv2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Smart TV Crystal LED 50 Samsung 50TU8000 4K",
            comments: [],
            creator: 'magalu'
        },
        "32246dzw": 
        {
            productId: '32246dzw',
            currentQuantity: 10,
            categoryId: '11tab',
            imageURL: '/img/products/tablet1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tablet Samsung A7 10,4 64Gb Preto",
            comments: [],
            creator: 'magalu'
        },
        "32247dzw": 
        {
            productId: '32247dzw',
            currentQuantity: 10,
            categoryId: '11tab',
            imageURL: '/img/products/tablet2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tablet Apple 8a Geração 10,2 128Gb Gold",
            comments: [],
            creator: 'magalu'
        },
        "32248dzw": 
        {
            productId: '32248dzw',
            currentQuantity: 10,
            categoryId: '11mic',
            imageURL: '/img/products/micro1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Micro-ondas Midea 20L Espelhado 110V",
            comments: [],
            creator: 'magalu'
        },
        "32249dzw": 
        {
            productId: '32249dzw',
            currentQuantity: 10,
            categoryId: '11mic',
            imageURL: '/img/products/micro2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Micro-ondas LG EasyClean 30L 220V",
            comments: [],
            creator: 'magalu'
        },
        "33002lkg": 
        {
            productId: '33002lkg',
            currentQuantity: 10,
            categoryId: '11sec',
            imageURL: '/img/products/secador1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Secador MQ Profissional Íon 2100W 220V",
            comments: [],
            creator: 'magalu'
        },
        "33003lkg": 
        {
            productId: '33003lkg',
            currentQuantity: 10,
            categoryId: '11sec',
            imageURL: '/img/products/secador2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Secador Taiff Black Íon 2000W 110V",
            comments: [],
            creator: 'magalu'
        },
        "33004lkg": 
        {
            productId: '33004lkg',
            currentQuantity: 10,
            categoryId: '111com',
            imageURL: '/img/products/computador2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Computador 3green All-in-One 24,5 Full HD Intel Dual Core 8Gb HD 500Gb",
            comments: [],
            creator: 'magalu'
        },
        "33005lkg": 
        {
            productId: '33005lkg',
            currentQuantity: 10,
            categoryId: '11bon',
            imageURL: '/img/products/bone1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Boné Adidas Aba Curva Strapback Preto e Branco Unissex",
            comments: [],
            creator: 'magalu'
        },
        "33006lkg": 
        {
            productId: '33006lkg',
            currentQuantity: 10,
            categoryId: '11bon',
            imageURL: '/img/products/bone2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Boné Viko Básico Preto Masculino",
            comments: [],
            creator: 'magalu'
        },
        "33007lkg": 
        {
            productId: '33007lkg',
            currentQuantity: 10,
            categoryId: '11cas',
            imageURL: '/img/products/camisa1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Camiseta Lisa Preta 100% Algodão Masculina",
            comments: [],
            creator: 'magalu'
        },
        "33019lkg": 
        {
            productId: '33019lkg',
            currentQuantity: 10,
            categoryId: '11cas',
            imageURL: '/img/products/camisa2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Camisa Manda Longa Listrada Rosa Feminina",
            comments: [],
            creator: 'magalu'
        },
        "33020lkg": 
        {
            productId: '33020lkg',
            currentQuantity: 10,
            categoryId: '11blu',
            imageURL: '/img/products/blusa1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Blusa Cropped Gola Manga Curta Preta Feminina",
            comments: [],
            creator: 'magalu'
        },
        "33021lkg": 
        {
            productId: '33021lkg',
            currentQuantity: 10,
            categoryId: '11blu',
            imageURL: '/img/products/blusa2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Blusa Modal Plus Manga Longa Vinho Feminina",
            comments: [],
            creator: 'magalu'
        },
        "33022lkg": 
        {
            productId: '33022lkg',
            currentQuantity: 10,
            categoryId: '11cal',
            imageURL: '/img/products/calca1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Calça de Moletom Preta Masculina",
            comments: [],
            creator: 'magalu'
        },
        "33023lkg": 
        {
            productId: '33023lkg',
            currentQuantity: 10,
            categoryId: '11cal',
            imageURL: '/img/products/calca2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Calça Jeans Ballon Azul Feminina",
            comments: [],
            creator: 'magalu'
        },
        "33024lkg": 
        {
            productId: '33024lkg',
            currentQuantity: 10,
            categoryId: '11ten',
            imageURL: '/img/products/tenis1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tênis Nike SB Charge Preto Masculino",
            comments: [],
            creator: 'magalu'
        },
        "33025lkg": 
        {
            productId: '33025lkg',
            currentQuantity: 10,
            categoryId: '11ten',
            imageURL: '/img/products/tenis2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Tênis Adidas Breaknet Branco Feminino",
            comments: [],
            creator: 'magalu'
        },
        "33026lkg": 
        {
            productId: '33026lkg',
            currentQuantity: 10,
            categoryId: '11chi',
            imageURL: '/img/products/chinelo1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chinelo Olympikus 921 Preto e Laranja Masculino",
            comments: [],
            creator: 'magalu'
        },
        "33027lkg": 
        {
            productId: '33027lkg',
            currentQuantity: 10,
            categoryId: '11chi',
            imageURL: '/img/products/chinelo2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chinelo Fila Drifter Basic Rosa Feminino",
            comments: [],
            creator: 'magalu'
        },
        "35221pcg": 
        {
            productId: '35221pcg',
            currentQuantity: 10,
            categoryId: '11cer',
            imageURL: '/img/products/cereal1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cereal Matinal Kellogg's Original 250g",
            comments: [],
            creator: 'magalu'
        },
        "35222pcg": 
        {
            productId: '35222pcg',
            currentQuantity: 10,
            categoryId: '11cer',
            imageURL: '/img/products/cereal2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Cereal Matinal Superbom Super Balls 200g",
            comments: [],
            creator: 'magalu'
        },
        "35223pcg": 
        {
            productId: '35223pcg',
            currentQuantity: 10,
            categoryId: '11car',
            imageURL: '/img/products/carne1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Bife de Coxão Mole 500g",
            comments: [],
            creator: 'magalu'
        },
        "35224pcg": 
        {
            productId: '35224pcg',
            currentQuantity: 10,
            categoryId: '11car',
            imageURL: '/img/products/carne2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Picanha Bovina Maturatta Embalada a Vácuo 1Kg",
            comments: [],
            creator: 'magalu'
        },
        "35225pcg": 
        {
            productId: '35225pcg',
            currentQuantity: 10,
            categoryId: '11pei',
            imageURL: '/img/products/peixe1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Truta Defumada e Curada 350g",
            comments: [],
            creator: 'magalu'
        },
        "35226pcg": 
        {
            productId: '35226pcg',
            currentQuantity: 10,
            categoryId: '11pei',
            imageURL: '/img/products/peixe2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Filé de Salmão Congelado 300g",
            comments: [],
            creator: 'magalu'
        },
        "35227pcg": 
        {
            productId: '35227pcg',
            currentQuantity: 10,
            categoryId: '11bol',
            imageURL: '/img/products/bolacha1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Bolacha Maria Isabela 400g",
            comments: [],
            creator: 'magalu'
        },
        "35228pcg": 
        {
            productId: '35228pcg',
            currentQuantity: 10,
            categoryId: '11bol',
            imageURL: '/img/products/bolacha2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Bolacha Bono Nestlé Chocolate 126g",
            comments: [],
            creator: 'magalu'
        },
        "35229pcg": 
        {
            productId: '35229pcg',
            currentQuantity: 10,
            categoryId: '11cho',
            imageURL: '/img/products/chocolate1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chocolate Nestlé Suflair 130g",
            comments: [],
            creator: 'magalu'
        },
        "35230pcg": 
        {
            productId: '35230pcg',
            currentQuantity: 10,
            categoryId: '11cho',
            imageURL: '/img/products/chocolate2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Chocolate Garoto Talento Castanha-do-Pará 25g",
            comments: [],
            creator: 'magalu'
        },
        "35231pcg": 
        {
            productId: '35231pcg',
            currentQuantity: 10,
            categoryId: '11sov',
            imageURL: '/img/products/sorvete1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sorvete Kibon Cremosíssimo 4 em 1 Tropical 1.5L",
            comments: [],
            creator: 'magalu'
        },
        "35232pcg": 
        {
            productId: '35232pcg',
            currentQuantity: 10,
            categoryId: '11sov',
            imageURL: '/img/products/sorvete2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Sorvete Garoto Chocolate 1.5L",
            comments: [],
            creator: 'magalu'
        },
        "56s21jzw": 
        {
            productId: '56s21jzw',
            currentQuantity: 10,
            categoryId: '111pla',
            imageURL: '/img/products/placa1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Placa-Mãe AMD Gigabyte Aorus B550M DDR4 AM4 mATX",
            comments: [],
            creator: 'magalu'
        },
        "56s22jzw": 
        {
            productId: '56s22jzw',
            currentQuantity: 10,
            categoryId: '111pla',
            imageURL: '/img/products/placa2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Placa-Mãe ASUS TUF B460M Intel LGA1200 10a Geração DDR4 mATX",
            comments: [],
            creator: 'magalu'
        },
        "56s23jzw": 
        {
            productId: '56s23jzw',
            currentQuantity: 10,
            categoryId: '111pro',
            imageURL: '/img/products/processador1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Processador Inter-Core i9-10850K Cache 20Mb 3.6GHz (5.2 GHz Turbo) LGA1200",
            comments: [],
            creator: 'magalu'
        },
        "56s24jzw": 
        {
            productId: '56s24jzw',
            currentQuantity: 10,
            categoryId: '111pro',
            imageURL: '/img/products/processador2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Processador AMD Ryzen 9 5900X Cache 70Mb 3.7GHz (4.8 GHz Turbo) AM4",
            comments: [],
            creator: 'magalu'
        },
        "56s25jzw": 
        {
            productId: '56s25jzw',
            currentQuantity: 10,
            categoryId: '111fon',
            imageURL: '/img/products/fonte1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Fonte EVGA 600W 80 Plus Bronze Semi-Modular com PFC Ativo",
            comments: [],
            creator: 'magalu'
        },
        "56s26jzw": 
        {
            productId: '56s26jzw',
            currentQuantity: 10,
            categoryId: '111fon',
            imageURL: '/img/products/fonte2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Fonte Corsair CV Series 650W 80 Plus Bronze",
            comments: [],
            creator: 'magalu'
        },
        "56s27jzw": 
        {
            productId: '56s27jzw',
            currentQuantity: 10,
            categoryId: '111mem',
            imageURL: '/img/products/memoria1.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Memória RAM HyperX Fury 8Gb DDR4 2666MHz CL16",
            comments: [],
            creator: 'magalu'
        },
        "56s28jzw": 
        {
            productId: '56s28jzw',
            currentQuantity: 10,
            categoryId: '111mem',
            imageURL: '/img/products/memoria2.jpg',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Memória RAM para Notebook Team Group T-Force Vulcan 8Gb DDR4 2666MHz CL18",
            comments: [],
            creator: 'magalu'
        },
    };
    return products;
}