import React from 'react';

import CarouselPage from './CarouselPage';

type CarouselProps<T> = {
    carouselID: string,
    itemsPerPage: number,
    carouselItemsInfo: T[],
    component: React.FC<T>;
};

function subDivideItemsInPages(items: any[], itemsPerPage: number): any[][] {
    const itemCount = items.length;
    if (itemCount <= 0 || itemsPerPage <= 0) return [];

    let lastPageRepeatCount = (itemsPerPage - itemCount % itemsPerPage) % itemsPerPage;

    if (itemCount < itemsPerPage)  {
        itemsPerPage = itemCount;
        lastPageRepeatCount = 0;
    }

    const pageCount = Math.ceil(itemCount / itemsPerPage)

    let itemsPerPageVec = [];

    for (let i = 0; i < pageCount; i++) {
        let currPageItems = [];

        let k = i * itemsPerPage;
        if (i === pageCount - 1) k -= lastPageRepeatCount;

        for (let j = 0; j < itemsPerPage; j++) {
            currPageItems.push(items[k+j]);
        }
        itemsPerPageVec.push(currPageItems);
    }
    return itemsPerPageVec;
}

export default function Carousel<T>(props: CarouselProps<T>) {

    const itemsPerPageVec = subDivideItemsInPages(props.carouselItemsInfo, props.itemsPerPage);
    return (
        <React.Fragment>
            <div id={props.carouselID} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mx-auto w-75">
                    {
                        itemsPerPageVec.map((pageItemsInfo, index) => <CarouselPage first={index === 0} component={props.component} carouselPageItemsInfo={pageItemsInfo} />)
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.carouselID}`}
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.carouselID}`}
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                </div>
            </div> */}
        </React.Fragment>
    )
};