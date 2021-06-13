import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselItem from './CarouselItem';
import CarouselPage from './CarouselPage';

type CarouselProps = {
    id: string,
    itemsPerPage: number,
    carouselItemsInfo: any[],
    component: React.FC;
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

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {

    const itemsPerPageVec = subDivideItemsInPages(props.carouselItemsInfo, props.itemsPerPage);
    return (
        <React.Fragment>
            <div id={props.id} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mx-auto w-75">
                    {
                        itemsPerPageVec.map((pageItemsInfo, index) => <CarouselPage first={index === 0} component={props.component} carouselPageItemsInfo={pageItemsInfo} />)
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`}
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`}
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

export default Carousel;