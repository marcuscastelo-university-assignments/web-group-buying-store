import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

type CarouselItemProps = {
    carouselItemInfo: any,
    component: React.FC
};

const CarouselItem: React.FC<CarouselItemProps> = (props: CarouselItemProps) => {
    const Comp = props.component;
    return (
        <React.Fragment>
            <div className="col">
                <Comp {...props.carouselItemInfo}/>
            </div>
        </React.Fragment>
    )
};

export default CarouselItem;