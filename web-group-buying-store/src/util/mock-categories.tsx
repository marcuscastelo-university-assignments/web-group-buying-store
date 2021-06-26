export type CategoryDescription = {
    id: string,
    name: string,
    imageSrc: string,
    parent?: string
}

export type LayerDescription = CategoryDescription[];

export type CategoryLayersDescription =  { [layer: string]: LayerDescription };

// export function generateMockCategories(count: number, layerCount: number) {
//     const possibleImages = ['bed'];

//     //Image source stuff
//     const categoryImagesPath = '/img/categories/';
//     const genSrc = (name: string) => categoryImagesPath + name;

//     let layers: {[layer:string]: LayerDescription} = {};

//     let remainingCount = count;

//     for (let i = 0; i < count; i++) {

//         categories[i] = { id,imageSrc,name }
//     }

// }

export function generateMockCategories(/*count: number, layerCount: number*/) {

    let layers: CategoryLayersDescription = {

        "1": [
            { name: "item0", id: "id0", imageSrc: "/img/categories/bed.png" },
            { name: "item1", id: "id1", imageSrc: "/img/categories/bed.png" },
            { name: "item2", id: "id2", imageSrc: "/img/categories/bed.png" },
            { name: "item3", id: "id3", imageSrc: "/img/categories/bed.png" },
            { name: "item4", id: "id4", imageSrc: "/img/categories/bed.png" },
            { name: "item5", id: "id5", imageSrc: "/img/categories/bed.png" }/*,
            { name: "item6", id: "id6", imageSrc: "/img/categories/bed.png" },
            { name: "item7", id: "id7", imageSrc: "/img/categories/bed.png" },
            { name: "item8", id: "id8", imageSrc: "/img/categories/bed.png" },
            { name: "item9", id: "id9", imageSrc: "/img/categories/bed.png" }*/
        ],
        "11": [
            { name: "item10a", id: "id10a", parent: "id0", imageSrc: "/img/categories/bed.png" },
            { name: "item10b", id: "id10b", parent: "id0", imageSrc: "/img/categories/bed.png" },
            { name: "item10c", id: "id10c", parent: "id0", imageSrc: "/img/categories/bed.png" },
            { name: "item10d", id: "id10d", parent: "id0", imageSrc: "/img/categories/bed.png" },
            { name: "item10e", id: "id10e", parent: "id0", imageSrc: "/img/categories/bed.png" },
            { name: "item11", id: "id11", parent: "id1", imageSrc: "/img/categories/bed.png" },
            { name: "item12", id: "id12", parent: "id2", imageSrc: "/img/categories/bed.png" },
            { name: "item13", id: "id13", parent: "id3", imageSrc: "/img/categories/bed.png" },
            { name: "item14", id: "id14", parent: "id4", imageSrc: "/img/categories/bed.png" },
            { name: "item15", id: "id15", parent: "id5", imageSrc: "/img/categories/bed.png" },
            { name: "item16", id: "id16", parent: "id6", imageSrc: "/img/categories/bed.png" },
            { name: "item17", id: "id17", parent: "id7", imageSrc: "/img/categories/bed.png" },
            { name: "item18", id: "id18", parent: "id8", imageSrc: "/img/categories/bed.png" },
            { name: "item19", id: "id19", parent: "id9", imageSrc: "/img/categories/bed.png" }

        ],
        "111": [
            { name: "item20", id: "id20", parent: "id10a", imageSrc: "/img/categories/bed.png" },
            { name: "item21", id: "id21", parent: "id11", imageSrc: "/img/categories/bed.png" },
            { name: "item22", id: "id22", parent: "id12", imageSrc: "/img/categories/bed.png" },
            { name: "item23", id: "id23", parent: "id13", imageSrc: "/img/categories/bed.png" },
            { name: "item24", id: "id24", parent: "id14", imageSrc: "/img/categories/bed.png" },
            { name: "item25", id: "id25", parent: "id15", imageSrc: "/img/categories/bed.png" },
            { name: "item26", id: "id26", parent: "id16", imageSrc: "/img/categories/bed.png" },
            { name: "item27", id: "id27", parent: "id17", imageSrc: "/img/categories/bed.png" },
            { name: "item28", id: "id28", parent: "id18", imageSrc: "/img/categories/bed.png" },
            { name: "item29", id: "id29", parent: "id19", imageSrc: "/img/categories/bed.png" }
        ]




    };

    return layers;


}