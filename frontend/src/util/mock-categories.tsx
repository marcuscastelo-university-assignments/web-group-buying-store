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
            { layer: "1", name: "Quarto e Sala", id: '1qes', imageSrc:'/img/categories/bed.png' },
            { layer: "1", name: "Banheiro e Lavanderia", id: '1bel', imageSrc:'/img/categories/bath.png' }
        ],
        "11": [
            { layer: "11", parent:'1qes', final: true, name: "Ar condicionado", id: '11ac', imageSrc: '/img/categories/ac.png' },
            { layer: "11", parent:'1qes', final: true, name: "Móveis", id: '11bureau', imageSrc: '/img/categories/bureau.png' },
            { layer: "11", parent:'1qes', final: true, name: "Ventilador", id: '11vent', imageSrc: '/img/categories/fan.png' },
            { layer: "11", parent:'1qes', final: true, name: "Cadeira", id: '11cadeira', imageSrc: '/img/categories/chair.png' },
            { layer: "11", parent:'1qes', final: true, name: "Armário", id: '11wardrobe', imageSrc: '/img/categories/wardrobe.png' },
            { layer: "11", parent:'1qes', final: true, name: "Cama", id: '11bed', imageSrc: '/img/categories/bed.png' },

            { layer: "11", parent:'1bel', final: true, name: "Lavadora de roupas", id: '11wash', imageSrc: '/img/categories/washingmachine.png' },
            { layer: "11", parent:'1bel', final: true, name: "Secador de cabelo", id: '11haird', imageSrc: '/img/categories/hairdryer.png' },
            { layer: "11", parent:'1bel', final: true, name: "Banheira", id: '11bath', imageSrc: '/img/categories/bath.png' },
        ],
        "111": [
            // { layer: "111", parent:'11bureau', final: true, name: "Banheira", id: '11bath', imageSrc: '/img/categories/bath.png' },
        ]




    };

    return layers;


}