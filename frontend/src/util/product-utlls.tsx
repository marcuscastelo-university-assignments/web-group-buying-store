import { MilestoneProps, ProductProps } from "../types";

export type RuntimeProductInfo = ProductProps & {
    currentMilestone: MilestoneProps | null,
    nextMilestone: MilestoneProps | null,
    firstMilestone: MilestoneProps | null,
    lastMilestone: MilestoneProps | null,
}

export function calculateRuntimeInfo(product: ProductProps): RuntimeProductInfo {
    if (product === undefined) {
        console.error('this should not happen')
        return {} as RuntimeProductInfo;
    }

    product.milestones.sort((m1, m2) => m1.quantity - m2.quantity);
    const nextMilestoneIdx = product.milestones.findIndex(m => m.quantity > product.currentQuantity);
    let currentMilestoneIdx = Math.max(0, (nextMilestoneIdx < 0) ? product.milestones.length-1 : nextMilestoneIdx - 1);


    // TODO if -1 current or next

    const currentMilestone = currentMilestoneIdx < 0 ? null : product.milestones[currentMilestoneIdx] 
    const nextMilestone = nextMilestoneIdx < 0 ? null : product.milestones[nextMilestoneIdx] 
    const lastMilestone = product.milestones.length === 0 ? null : product.milestones[product.milestones.length-1]
    const firstMilestone = product.milestones.length === 0 ? null : product.milestones[0]

    return {
        ...product,
        currentMilestone,
        nextMilestone,
        firstMilestone,
        lastMilestone,
    }
}
