import React from 'react';

import CarouselItem from './CarouselItem';

type CarouselPageProps<T> = {
    carouselPageItemsInfo: T[],
    component: React.FC<T>
    first: boolean
};

const CarouselPage = <T, >(props: CarouselPageProps<T>) => {
    return (
        <React.Fragment>
            <div className={`carousel-item row-car ${props.first?'active':''} `}>
                <div className="row row-flex gx-1 justify-content-center">
                    {
                        props.carouselPageItemsInfo.map(itemInfo => <CarouselItem component={props.component} carouselItemInfo={itemInfo} key={`carousel-${Date.now()*Math.random()}-${props.carouselPageItemsInfo.length}`} />)
                    }
                </div>
            </div>
        </React.Fragment>
    )
};

export default CarouselPage;