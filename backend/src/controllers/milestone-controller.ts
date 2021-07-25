import { Request, Response, NextFunction } from 'express';
import Product, { ProductModel } from '../models/product';

//Mongoose controller for milestones in a product
export async function getMilestones(req: Request, res: Response) {
    //Get all milestones from a product
    const productId = req.params.id;
    const product = await Product.findOne({ productId }).exec();
    if (!product)
        return res.json({message: 'Product not found'});
    return res.json(product.milestones);
}

export async function getMilestone(req: Request, res: Response) {
    //Get specific milestone from product
    const productId = req.params.id;
    const milestoneQty = parseInt(req.params.mqty);
    const product = await Product.findOne({productId}).exec();
    if (product === null)
        return res.json({ message: 'Product not found' });
        
    const milestone = product.milestones.find(m => m.quantity == milestoneQty );
    if (!milestone)
        return res.json({ message: 'Milestone not found' });
    
    return res.status(200).json(milestone);
}

export async function createMilestone(req: Request, res: Response) {
    //Adds a new milestone to product milestones
    const productId = req.params.id;
    const milestone = req.body as ProductMilestone;

    const result = await Product.updateOne({ productId }, {
        $push: {
            milestones: milestone
        }
    }).exec();

    if (result && result.n > 0)
        res.status(200).json(milestone);
    else
        res.status(404).json({ message: 'Product/Milestone not found' });
}

export async function updateMilestone(req: Request, res: Response) {
    //Updates a milestone
    const productId = req.params.id;
    const milestoneQty = parseInt(req.params.mqty);
    const milestone = req.body as ProductMilestone;

    const result = await Product.updateOne({ productId, "milestones.quantity":  milestoneQty }, {
        $set: {
            'milestones.$': milestone
        }
    }).exec();

    if (result && result.n > 0)
        res.status(200).json(milestone);
    else
        res.status(404).json({ message: 'Product/Milestone not found' });
}

//Delete milestone based on quantity
export async function deleteMilestone(req: Request, res: Response) {
        //Deletes a milestone
    const productId = req.params.id;
    const milestoneQty = parseInt(req.params.mqty);

    const result = await Product.updateOne({ productId }, {
        $pull: {
            milestones: { quantity: milestoneQty }
        }
    }).exec();

    if (result && result.nModified > 0)
        res.status(200).json({ message: 'Milestone deleted' });
    else
        res.status(404).json({ message: 'Product/Milestone not found' });
}