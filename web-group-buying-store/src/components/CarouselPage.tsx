import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselItem from './CarouselItem';

type CarouselPageProps = {
    carouselPageItemsInfo: any[],
    component: React.FC
    first: boolean
};

const CarouselPage: React.FC<CarouselPageProps> = (props: CarouselPageProps) => {
    const Comp = props.component;
    return (
        <React.Fragment>
            <div className={`carousel-item row-car ${props.first?'active':''} `}>
                <div className="row g-1">
                    {
                        props.carouselPageItemsInfo.map(itemInfo => <CarouselItem component={props.component} carouselItemInfo={itemInfo} />)
                    }
                </div>
            </div>
        </React.Fragment>
    )
};

export default CarouselPage;