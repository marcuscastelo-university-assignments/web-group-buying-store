import React from 'react';
import { getProduct, getProducts } from '../util/local-storage';
import { calculateRuntimeInfo } from '../util/product-utlls';
import { MilestoneProps, ProductProps } from './ProductCard';


//TODO: import bootstrap on all files?

type MilestoneItemProps = {
    product: ProductProps, 
    milestone: MilestoneProps,
    expanded?: boolean,
    onClick?: () => void,
}


export default function MilestoneItem({product, milestone, expanded = false, onClick=()=>{}} : MilestoneItemProps) {
        const reached = milestone.quantity <= product.currentQuantity;
        const next = !reached  && calculateRuntimeInfo(product).nextMilestone === milestone;

    return (
        <div className={`milestone-item row card mx-auto m-2 p-1 w-100 ${reached ? 'text-muted' : next ? 'fw-bold' : ''}`} style={{backgroundColor: milestone.quantity <= product.currentQuantity ? '' : ''}}  data-milestone={`${product.title}-${milestone.quantity}`} onClick={onClick}>
            <div className="card-header bg-transparent">
                Meta: {product.currentQuantity}/{milestone.quantity} {reached? ' - Concluída!' : ''}
            </div>
            <div className={`card-body ${expanded ? '' : 'd-none'}`}>
                <h5 className="card-title">R${milestone.price}</h5>
                <p className={`card-text ${expanded ? 'd-none' : ''}`}>With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    );
}