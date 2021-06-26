import React from 'react';
import { MilestoneProps, ProductProps } from './ProductCard';


//TODO: import bootstrap on all files?

export default function MilestoneItem({ product, milestone }: { product: ProductProps, milestone: MilestoneProps }) {
    return (
        <div className="milestone-item row card mx-auto m-2 p-1 w-100" data-milestone={`${product.title}-${milestone.quantity}`}>
            <div className="card-header bg-transparent">
                Meta: {product.currentQuantity}/{milestone.quantity}
            </div>
            <div className="card-body d-none">
                <h5 className="card-title">R${milestone.price}</h5>
                <p className="card-text d-none">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    );
}