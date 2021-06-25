import React, { MouseEventHandler } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Category from './Category'

export type CategoryLayerProps = {
    layer: string
    children: React.ReactNode,
    className?: string
    onMouseLeave: MouseEventHandler
};

const CategoryLayer = (props: CategoryLayerProps) => {
    return (
        <React.Fragment>
            <div
                className={`row layer ${props.layer !== '1' ? 'd-none' : ''} ${props.className ?? ''} `}
                data-layer={`${props.layer}`}
                
            >
                <div className={`mx-auto align-self-center d-flex flex-row `}>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}
export default CategoryLayer