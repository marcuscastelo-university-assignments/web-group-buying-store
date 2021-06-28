import { MilestoneProps, ProductProps } from "../types";

export type RuntimeProductInfo = ProductProps & {
    currentMilestone: MilestoneProps | null,
    nextMilestone: MilestoneProps | null,
    lastMilestone: MilestoneProps
}

export function calculateRuntimeInfo(product: ProductProps): RuntimeProductInfo {

    product.milestones.sort((m1, m2) => m1.quantity - m2.quantity);
    const nextMilestoneIdx = product.milestones.findIndex(m => m.quantity > product.currentQuantity);
    const currentMilestoneIdx = (nextMilestoneIdx < 0) ? product.milestones.length-1 : nextMilestoneIdx - 1;

    // TODO if -1 current or next

    const currentMilestone = currentMilestoneIdx < 0 ? null : product.milestones[currentMilestoneIdx] 
    const nextMilestone = nextMilestoneIdx < 0 ? null : product.milestones[nextMilestoneIdx] 
    const lastMilestone = product.milestones[product.milestones.length-1]

    return {
        ...product,
        currentMilestone,
        nextMilestone,
        lastMilestone,
    }
}
