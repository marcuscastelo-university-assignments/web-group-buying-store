import React from 'react';
import { MilestoneProps, ProductProps } from './ProductCard';


//TODO: import bootstrap on all files?

type MilestoneItemProps = {
    product: ProductProps, 
    milestone: MilestoneProps,
    expanded?: boolean,
    onClick?: () => void,
}

export default function MilestoneItem({product, milestone, expanded = false, onClick=()=>{}} : MilestoneItemProps) {
    return (
        <div className="milestone-item row card mx-auto m-2 p-1 w-100" data-milestone={`${product.title}-${milestone.quantity}`} onClick={onClick}>
            <div className="card-header bg-transparent">
                Meta: {product.currentQuantity}/{milestone.quantity}
            </div>
            <div className={`card-body ${expanded ? '' : 'd-none'}`}>
                <h5 className="card-title">R${milestone.price}</h5>
                <p className={`card-text ${expanded ? 'd-none' : ''}`}>With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    );
}