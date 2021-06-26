import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

type CarouselItemProps<T> = {
    carouselItemInfo: T,
    component: React.FC<T>
};

const CarouselItem = <T ,>(props: CarouselItemProps<T>) => {
    const Comp = props.component;
    return (
        <React.Fragment>
            <div className="col mx-1" style={{maxWidth:200}}>
                <Comp {...props.carouselItemInfo}/>
            </div>
        </React.Fragment>
    )
};

export default CarouselItem;