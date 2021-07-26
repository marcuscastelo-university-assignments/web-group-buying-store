import React from 'react';
import { ProductProps } from '../types';
import { RuntimeProductInfo, calculatePercentage } from '../util/product-utlls';

import './styles/MilestoneProgressBar.css'

type MilestoneProgressBarProps = {
    product: ProductProps,
    runtimeInfo: RuntimeProductInfo,
    milestoneState: [number, React.Dispatch<React.SetStateAction<number>>]
}


export default function MilestoneProgressBar({ product, runtimeInfo, milestoneState: [selectedMilestone, selectMilestone] }: MilestoneProgressBarProps) {
    return (
        <div className="row g-0 mt-3">
            <div className="col-12">
                <div className="col-8 mx-auto">
                    <div className="row progress position-relative">
                        <div className="progress-bar p-0  text-center bg-warning" role="progressbar" style={{ width: `${calculatePercentage(product.currentQuantity, runtimeInfo, false)}` }}
                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <small className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold p-0">{(runtimeInfo.currentQuantity ?? 0)}/{(runtimeInfo.lastMilestone?.quantity ?? 0)}</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <nav id="progress-spots" className="mx-auto p-0 align-self-center d-flex flex-row position-relative">

                        {
                            product.milestones.map((milestone, idx) => (
                                <div className={`w-100 noclick d-flex position-absolute start-0 ${(selectedMilestone === -1 || selectedMilestone === idx) ? '' : 'd-none'}`}>
                                    <span className="invisible noclick" style={{ width: `${calculatePercentage(milestone.quantity, runtimeInfo, true)}` }}></span>
                                    <a data-milestone={`${product.title}-${milestone.quantity}`} href="#0" onClick={e => { e.preventDefault(); selectMilestone(selectedMilestone === idx ? -1 : idx) }}>
                                        <span className="milestone-progress-spot fa noclick fa-caret-up"></span>
                                    </a>
                                </div>
                            ))
                        }


                    </nav>
                </div>
            </div>
        </div>
    )
}