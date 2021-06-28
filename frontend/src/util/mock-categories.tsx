export type CategoryDescription = {
    id: string,
    name: string,
    layer: string,
    imageSrc: string,
    parent?: string,
    final?: boolean
}

export const DEFAULTS = {
    IMG_DEFAULT: '/img/no-preview.jpeg',
}



export type LayerDescription = CategoryDescription[];

export type CategoryLayersDescription =  { [layer: string]: LayerDescription };

//TODO: mention icons8 in some place (credits)
//Got icons from 'https://icons8.com/icon/set/household/wired--black'
export function generateMockCategories() {
    let layers: CategoryLayersDescription = {
        "1" : [
            { layer: "1", final: false, name: "Eletrodomésticos", id: '1ele', imageSrc:'/img/categories/bolt.png' },
            { layer: "1", final: false, name: "Roupas", id: '1rou', imageSrc:'/img/categories/tshirt.png' },
            { layer: "1", final: false, name: "Alimentos", id: '1ali', imageSrc:'/img/categories/food.png' },
        ],
        "11": [
            { layer: "11", parent:'1ele', final: true, name: "Celular", id: '11cel', imageSrc: '/img/categories/cellphone.png' },
            { layer: "11", parent:'1ele', final: true, name: "Tablet", id: '11tab', imageSrc: '/img/categories/tablet.png' },
            { layer: "11", parent:'1ele', final: true, name: "Televisão", id: '11tel', imageSrc: '/img/categories/television.png' },
            { layer: "11", parent:'1ele', final: true, name: "Lavadora de roupas", id: '11lav', imageSrc: '/img/categories/washingmachine.png' },
            { layer: "11", parent:'1ele', final: true, name: "Microondas", id: '11mic', imageSrc: '/img/categories/microwave.png' },
            { layer: "11", parent:'1ele', final: true, name: "Ventilador", id: '11ven', imageSrc: '/img/categories/fan.png' },
            { layer: "11", parent:'1ele', final: true, name: "Secador de cabelo", id: '11sec', imageSrc: '/img/categories/hairdryer.png' },
            { layer: "11", parent:'1ele', final: true, name: "Ar condicionado", id: '11arc', imageSrc: '/img/categories/airconditioner.png' },
            { layer: "11", parent:'1ele', final: false, name: "Computador", id: '11com', imageSrc: '/img/categories/computer.png' },

            { layer: "11", parent:'1rou', final: true, name: "Boné", id: '11bon', imageSrc: '/img/categories/cap.png' },
            { layer: "11", parent:'1rou', final: true, name: "Camisa", id: '11cas', imageSrc: '/img/categories/tshirt.png' },
            { layer: "11", parent:'1rou', final: true, name: "Blusa", id: '11blu', imageSrc: '/img/categories/blouse.png' },
            { layer: "11", parent:'1rou', final: true, name: "Calça", id: '11cal', imageSrc: '/img/categories/pants.png' },
            { layer: "11", parent:'1rou', final: true, name: "Tênis", id: '11ten', imageSrc: '/img/categories/tennis.png' },
            { layer: "11", parent:'1rou', final: true, name: "Chinelo", id: '11chi', imageSrc: '/img/categories/flipflops.png' },

            { layer: "11", parent:'1ali', final: true, name: "Cereais", id: '11cer', imageSrc: '/img/categories/wheat.png' },
            { layer: "11", parent:'1ali', final: true, name: "Carne", id: '11car', imageSrc: '/img/categories/lamb.png' },
            { layer: "11", parent:'1ali', final: true, name: "Peixe", id: '11pei', imageSrc: '/img/categories/fish.png' },
            { layer: "11", parent:'1ali', final: true, name: "Bolacha", id: '11bol', imageSrc: '/img/categories/cookies.png' },
            { layer: "11", parent:'1ali', final: true, name: "Chocolate", id: '11cho', imageSrc: '/img/categories/chocolate.png' },
            { layer: "11", parent:'1ali', final: true, name: "Sorvete", id: '11sov', imageSrc: '/img/categories/icecream.png' },
        ],
        "111": [
            { layer: "111", parent:'11com', final: true, name: "Placa Mãe", id: '111pla', imageSrc: '/img/categories/motherboard.png' },
            { layer: "111", parent:'11com', final: true, name: "Processador", id: '111pro', imageSrc: '/img/categories/processor.png' },
            { layer: "111", parent:'11com', final: true, name: "Fonte", id: '111fon', imageSrc: '/img/categories/electrical.png' },
            { layer: "111", parent:'11com', final: true, name: "Memória Ram", id: '111mem', imageSrc: '/img/categories/ram.png' },
            { layer: "111", parent:'11com', final: true, name: "Computador", id: '111com', imageSrc: '/img/categories/computer.png' },
        ]
    };

    return layers;
}