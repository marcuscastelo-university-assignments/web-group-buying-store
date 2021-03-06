import React, { MouseEventHandler } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


type CategoryProps = {
    layer: string,
    id: string,
    parent: string,
    subcategory: boolean,
    imageSrc: string,
    onMouseOver: MouseEventHandler
};

const Category = (props: CategoryProps) => {
    return (
        <React.Fragment>
                    {/* FOR */}

                    <div 
                        className={`category mx-auto ${props.subcategory? 'parent': ''}`} 
                        id={`${props.id}`} 
                        data-parent={`${props.parent}`} 
                        onMouseOver={props.onMouseOver}
                    >
                        <img alt={'Categoria ' + props.id} src={props.imageSrc}/>
                    </div>

                    {/* END FOR */}
        </React.Fragment>
    );
};

export default Category;