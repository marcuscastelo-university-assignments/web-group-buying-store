import React, { MouseEventHandler } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export type CategoryProps = {
    layer: string,
    id: string,
    parent: string,
    imageSrc: string,
    onMouseOver: MouseEventHandler
};

const Category = (props: CategoryProps) => {
    return (
        <React.Fragment>
                    {/* FOR */}

                    <div 
                        className={`category mx-auto ${props.layer !== '1' ? 'd-none' : ''}`} 
                        id={`${props.id}`} 
                        data-parent={`${props.parent}`} 
                        style={{background:`url(${props.imageSrc})`}}
                        onMouseOver={props.onMouseOver}
                    >
                        {props.id}
                    </div>

                    {/* END FOR */}
        </React.Fragment>
    );
};

export default Category;