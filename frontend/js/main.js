let layerInfo = {
    "layers": {
        "1": [
            { "name": "item0", "id": "id0", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item1", "id": "id1", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item2", "id": "id2", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item3", "id": "id3", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item4", "id": "id4", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item5", "id": "id5", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item6", "id": "id6", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item7", "id": "id7", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item8", "id": "id8", "parent": "undefined", "imageSrc": "./img/a.jpeg" },
            { "name": "item9", "id": "id9", "parent": "undefined", "imageSrc": "./img/a.jpeg" }
        ],
        "11": [
            { "name": "item10a", "id": "id10a", "parent": "id0", "imageSrc": "./img/a.jpeg" },
            { "name": "item10b", "id": "id10b", "parent": "id0", "imageSrc": "./img/a.jpeg" },
            { "name": "item10c", "id": "id10c", "parent": "id0", "imageSrc": "./img/a.jpeg" },
            { "name": "item10d", "id": "id10d", "parent": "id0", "imageSrc": "./img/a.jpeg" },
            { "name": "item10e", "id": "id10e", "parent": "id0", "imageSrc": "./img/a.jpeg" },
            { "name": "item11", "id": "id11", "parent": "id1", "imageSrc": "./img/a.jpeg" },
            { "name": "item12", "id": "id12", "parent": "id2", "imageSrc": "./img/a.jpeg" },
            { "name": "item13", "id": "id13", "parent": "id3", "imageSrc": "./img/a.jpeg" },
            { "name": "item14", "id": "id14", "parent": "id4", "imageSrc": "./img/a.jpeg" },
            { "name": "item15", "id": "id15", "parent": "id5", "imageSrc": "./img/a.jpeg" },
            { "name": "item16", "id": "id16", "parent": "id6", "imageSrc": "./img/a.jpeg" },
            { "name": "item17", "id": "id17", "parent": "id7", "imageSrc": "./img/a.jpeg" },
            { "name": "item18", "id": "id18", "parent": "id8", "imageSrc": "./img/a.jpeg" },
            { "name": "item19", "id": "id19", "parent": "id9", "imageSrc": "./img/a.jpeg" }

        ],
        "111": [
            { "name": "item20", "id": "id20", "parent": "id10a", "imageSrc": "./img/a.jpeg" },
            { "name": "item21", "id": "id21", "parent": "id11", "imageSrc": "./img/a.jpeg" },
            { "name": "item22", "id": "id22", "parent": "id12", "imageSrc": "./img/a.jpeg" },
            { "name": "item23", "id": "id23", "parent": "id13", "imageSrc": "./img/a.jpeg" },
            { "name": "item24", "id": "id24", "parent": "id14", "imageSrc": "./img/a.jpeg" },
            { "name": "item25", "id": "id25", "parent": "id15", "imageSrc": "./img/a.jpeg" },
            { "name": "item26", "id": "id26", "parent": "id16", "imageSrc": "./img/a.jpeg" },
            { "name": "item27", "id": "id27", "parent": "id17", "imageSrc": "./img/a.jpeg" },
            { "name": "item28", "id": "id28", "parent": "id18", "imageSrc": "./img/a.jpeg" },
            { "name": "item29", "id": "id29", "parent": "id19", "imageSrc": "./img/a.jpeg" }
        ]
    }
};

let carrouselLayerInfo = {
    "itemsPerPage": 5,
    "items": [
        { "alt": "item0", "id": "id0", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item1", "id": "id1", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item2", "id": "id2", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item3", "id": "id3", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item4", "id": "id4", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item5", "id": "id5", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item6", "id": "id6", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item7", "id": "id7", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item8", "id": "id8", "link": "url", "imageSrc": "./img/a.jpeg" },
        { "alt": "item9", "id": "id9", "link": "url", "imageSrc": "./img/a.jpeg" }

    ]
};


/*

                            <div class="carousel-item row-car">


                            <div class="carousel-item active row-car">
                                <div class="row g-1">
                                    <div class="col">
                                        <img src="./img/a.jpeg" class="d-block w-100" alt="pato1" />
                                    </div>
                                    <div class="col">
                                        <img src="./img/b.jpg" class="d-block w-100" alt="pato2" />
                                    </div>
                                </div>
                            </div>


*/




$(document).ready(function () {
    function populateCarrouselLayer() {
        let newHtml = `<div class="row layer d-none" id="layer-carousel">
                        <div class="col-9 mx-auto">
                            <div class="carousel slide" id="top-carousel" data-bs-ride="carousel">
                                <div class="carousel-inner">`;

        let pagesCount = Math.ceil(carrouselLayerInfo.items.length / carrouselLayerInfo.itemsPerPage);
        let exceedingItemsNeed = carrouselLayerInfo.items.length % carrouselLayerInfo.itemsPerPage;
        let imagesPerPage;
        for (let i = 0; i < pagesCount; i++) {
            newHtml += `<div class="${'carousel-item row-car ' + (i === 0 ? 'active' : '')} ">
                            <div class="row g-1">`
            let k = i * carrouselLayerInfo.itemsPerPage;
    
            if (i === pagesCount - 1) k -= exceedingItemsNeed;

            for(let j = 0; j < carrouselLayerInfo.itemsPerPage; j++) {
                let item = carrouselLayerInfo.items[k+j]
                newHtml +=  `   <div class="col">
                                    <a href="${item.link}">
                                        <img src="${item.imageSrc}" class="d-block w-100" alt="${item.alt}" />
                                    </a>
                                </div>`;
            }
            newHtml += `
                            </div>
                        </div>
            `;            
        }
        newHtml += "</div>";
        newHtml += `
                    <button class="carousel-control-prev" type="button" data-bs-target="#top-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#top-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
        `




        newHtml += `
                        </div>
                    </div>
                </div>
    `;

        let currHtml = $('#categories').html();
        $('#categories').html(currHtml + newHtml);

    }

    function populateLayers() {
        let newHtml = ''

        for (let layer in layerInfo.layers) {
            newHtml += `
                <div class="row layer ${layer !== '1' ? 'd-none' : ''}" data-layer="${layer}">
                    <div class="mx-auto align-self-center d-flex flex-row ">
            `;
            for (let category of layerInfo.layers[layer]) {
                newHtml += `
                <div class="category mx-auto ${layer !== '1' ? 'd-none' : ''}" id="${category.id}" data-parent="${category.parent}" style="background:url(${category.imageSrc});">
                    ${category.name}
                </div>`;
            }

            newHtml += "</div>\n</div>"

        }

        
        let currHtml = $('#categories').html();
        $('#categories').html(currHtml + newHtml);




        let cats = $(".category");

        for (let cat of cats) {
            let id = $(cat).attr('data-parent');
            $('.category#' + id).addClass('parent');
        }
        
    }

    populateLayers();
    populateCarrouselLayer();






    //Mouse Events
    $('.category').mouseover(function (e) {
        e.preventDefault();
        let self = $(this);
        let selfLayer = $(this).parent().parent().attr('data-layer');
        let targetRemoveLayer = selfLayer + '1';
        $(`#categories .layer[data-layer^=${targetRemoveLayer}]`).find('.category').addClass('d-none')


        let targets = $('#categories [data-parent="' + self.attr('id') + '"]');
        let targetLayers = targets.parent().parent();
        targetLayers.removeClass('d-none');
        targets.removeClass('d-none');
        console.log(self.hasClass('parent'))
        if (!self.hasClass('parent')) {
            $('#layer-carousel').removeClass('d-none');
        }
        else {
            $('#layer-carousel').addClass('d-none');
        }

    });

    $('#categories').mouseleave(function (e) {
        e.preventDefault();

        let layers = $(this).find(".layer[data-layer]:not([data-layer='1']")
        layers.addClass('d-none');
        layers.find('.category').addClass('d-none');
        $('#layer-carousel').addClass('d-none');


    });
});