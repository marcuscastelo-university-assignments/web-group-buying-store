import React from 'react';
import { ProductCalculatedRuntimeInfo } from '../pages/Product';
import { MilestoneProps, ProductProps } from './ProductCard';

import './styles/MilestoneProgressBar.css'

function workOnMilestones(milestoneCur: JQuery) {
    let milestoneIsActive = milestoneCur.hasClass('active');

    let milestoneTargets = $('#milestone-list .milestone-item')

    if (!milestoneIsActive) {
        milestoneTargets.addClass('d-none');
        milestoneCur.removeClass('d-none');

        milestoneTargets.find('.card-body').addClass('d-none');
        milestoneCur.find('.card-body').removeClass('d-none');

        milestoneCur.addClass('active');
        milestoneCur.addClass('h-100');
    } else {
        milestoneTargets.removeClass('d-none');
        milestoneTargets.find('.card-body').addClass('d-none');

        milestoneCur.removeClass('active');
        milestoneCur.removeClass('h-100');
    }
}


function workOnMilestoneSpots(milestoneSpotCur: JQuery) {
    let milestoneSpotIsActive = milestoneSpotCur.hasClass('active');

    let milestoneSpotTargets = $('.milestone-progress-spot')

    if (!milestoneSpotIsActive) {
        milestoneSpotTargets.parent().parent().addClass('d-none');
        milestoneSpotCur.removeClass('d-none');

        milestoneSpotCur.addClass('active');
    } else {
        milestoneSpotTargets.parent().parent().removeClass('d-none');
        milestoneSpotCur.removeClass('active');
    }
}

export default function MilestoneProgressBar({ product, runtimeInfo }: { product: ProductProps, runtimeInfo: ProductCalculatedRuntimeInfo }) {
    return (
        <div className="row g-0 mt-3">
            <div className="col-12">
                <div className="col-8 mx-auto">
                    <div className="row progress position-relative">
                        <div className="progress-bar  text-center bg-warning" role="progressbar" style={{ width: `${100 * runtimeInfo.curQtty/runtimeInfo.maxQuantity}%` }}
                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <small className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold">{runtimeInfo.curQtty}/{runtimeInfo.maxQuantity}</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <nav id="progress-spots" className="mx-auto p-0 align-self-center d-flex flex-row position-relative">

                        {
                            product.milestones.map((milestone, idx) => (
                                <div className="w-100 noclick d-flex position-absolute start-0">
                                    <span className="invisible noclick" style={{ width: `${100 * (1 / 6 + (2 * milestone.quantity) / (3 * runtimeInfo.maxQuantity))}%` }}></span>
                                    <a data-milestone={`${product.title}-${milestone.quantity}`} href="#0">
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