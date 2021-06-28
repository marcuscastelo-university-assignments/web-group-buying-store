import React from 'react';
import { useHistory } from 'react-router';
import { MilestoneProps, ProductProps } from '../types';
import { calculateRuntimeInfo } from '../util/product-utlls';


//TODO: import bootstrap on all files?

type MilestoneItemProps = {
    product: ProductProps,
    milestone: MilestoneProps,
    expanded?: boolean,
    onClick?: () => void,
    onRemove?: (product: ProductProps, milestone: MilestoneProps) => boolean,
}


export default function MilestoneItem({ product, milestone, expanded = false, onClick = () => { }, onRemove = () => { return false; } }: MilestoneItemProps) {
    const reached = milestone.quantity <= product.currentQuantity;
    const next = !reached && calculateRuntimeInfo(product).nextMilestone === milestone;

    const history = useHistory();

    return (
        <div className={`milestone-item row card mx-auto m-2 p-1 w-100 ${reached ? 'text-muted' : next ? 'fw-bold' : ''}`} style={{ backgroundColor: milestone.quantity <= product.currentQuantity ? '' : '' }} data-milestone={`${product.title}-${milestone.quantity}`} onClick={onClick}>
            <div className="card-header bg-transparent">
                Meta: {product.currentQuantity}/{milestone.quantity} {reached ? ' - Concluída!' : ''}
            </div>
            <div className={`card-body ${expanded ? '' : 'd-none'}`}>
                <h5 className="card-title">R${milestone.price}</h5>
                <p className={`card-text ${expanded ? 'd-none' : ''}`}>With supporting text below as a natural lead-in to additional content.</p>
                <a href="#0" onClick={(e) => { e.preventDefault(); onRemove(product, milestone); history.push('/create_product') }}>
                    <div className="text-center" style={{ fontSize: '2.5em', color: 'darkred' }} >
                        <i className="fa fa-trash"></i>
                    </div>
                </a>
            </div>
        </div>
    );
}