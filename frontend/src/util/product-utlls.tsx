import { MilestoneProps, ProductProps } from "../types";

export type RuntimeProductInfo = ProductProps & {
    currentMilestone: MilestoneProps | null,
    nextMilestone: MilestoneProps | null,
    firstMilestone: MilestoneProps,
    lastMilestone: MilestoneProps,
}

export function calcRemainingToReducePrice(product: ProductProps, countOnCart: number) {
    const prod = { ...product };
    prod.currentQuantity += countOnCart;
    const rti = calculateRuntimeInfo(prod);
    console.table(rti);
    if (!rti.nextMilestone)
        return (rti.lastMilestone.quantity) - (rti.currentQuantity);

    return (rti.nextMilestone.quantity) - (rti.currentQuantity);
}

export function calculateRuntimeInfo(product: ProductProps): RuntimeProductInfo {
    if (product.milestones.length === 0) {
        console.error('this should not happen === 0')
        console.table(product);
        return {} as RuntimeProductInfo;
    }

    if (product === undefined) {
        console.error('this should not happen === undefined')
        return {} as RuntimeProductInfo;
    }

    product.milestones.sort((m1, m2) => m1.quantity - m2.quantity);
    const nextMilestoneIdx = product.milestones.findIndex(m => m.quantity > product.currentQuantity);
    let currentMilestoneIdx = (nextMilestoneIdx < 0) ? product.milestones.length - 1 : nextMilestoneIdx - 1;

    const currentMilestone = currentMilestoneIdx < 0 ? null : product.milestones[currentMilestoneIdx]
    const nextMilestone = nextMilestoneIdx < 0 ? null : product.milestones[nextMilestoneIdx]
    const lastMilestone = product.milestones[product.milestones.length - 1]
    const firstMilestone = product.milestones[0]

    return {
        ...product,
        currentMilestone,
        nextMilestone,
        firstMilestone,
        lastMilestone,
    }
}


export function calculatePercentage(quantity: number, runtimeInfo: RuntimeProductInfo, carret: boolean) {
    let ratio = quantity / ((runtimeInfo.lastMilestone?.quantity ?? 0) || 1);
    if (quantity === runtimeInfo.lastMilestone?.quantity) {
        ratio = 1;
    }


    let percentage;
    if (carret)
        percentage = (1 / 6) + ((2 / 3) * ratio);
    else
        percentage = ratio;

    return `${percentage * 100}%`;
}
