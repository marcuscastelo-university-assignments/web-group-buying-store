import { Request, Response, NextFunction } from 'express';
import Product, { ProductModel, ProductMilestone } from '../models/product';

//Mongoose controller for milestones in a product
export async function getMilestones(req: Request, res: Response) {
    //Get all milestones from a product
    const productId = req.params.id;
    const product = await Product.findOne({ productId }).exec();
    if (!product)
        return res.json({ message: 'Product not found' });
    return res.json(product.milestones);
}

export async function getMilestone(req: Request, res: Response) {
    //Get specific milestone from product
    const productId = req.params.id;    //by id
    const milestoneQty = parseInt(req.params.mqty); //taking the number of milestones
    const product = await Product.findOne({ productId }).exec();    //search by id
    if (product === null)   //if can not find
        return res.json({ message: 'Product not found' });

    const milestone = product.milestones.find(m => m.quantity == milestoneQty); //if finded
    if (!milestone) //if there's no milestone
        return res.json({ message: 'Milestone not found' });

    return res.status(200).json(milestone);
}

export async function createMilestone(req: Request, res: Response) {
    //Adds a new milestone to product milestones
    const productId = req.params.id;    //by id
    const milestone = req.body as ProductMilestone;

    const result = await Product.updateOne(
        {
            productId,
            "milestones.quantity": { $ne: milestone.quantity }  //set the quantity
        },
        {
            $push: {
                milestones: milestone   //adding the milestone
            }
        }).exec();

    if (result && result.n > 0)
        res.status(200).json(milestone);    //if created
    else    
        res.status(404).json({ message: 'Product/Milestone not found' });   //error
}

export async function updateMilestone(req: Request, res: Response) {
    //Updates a milestone
    const productId = req.params.id;    //by id
    const milestoneQty = parseInt(req.params.mqty); //take the quantity of milestones
    const milestone = req.body as ProductMilestone;

    const result = await Product.updateOne({ productId, "milestones.quantity": milestoneQty }, {
        $set: {
            'milestones.$': milestone   //updating milestone
        }
    }).exec();

    if (result && result.n > 0) //if it works
        res.status(200).json(milestone);
    else    //if not
        res.status(404).json({ message: 'Product/Milestone not found' });
}

//Delete milestone based on quantity
export async function deleteMilestone(req: Request, res: Response) {
    //Deletes a milestone
    const productId = req.params.id;    //by id
    const milestoneQty = parseInt(req.params.mqty);

    const result = await Product.updateOne({ productId }, { //delete milestone
        $pull: {
            milestones: { quantity: milestoneQty }
        }
    }).exec();

    if (result && result.nModified > 0)
        res.status(200).json({ message: 'Milestone deleted' });
    else
        res.status(404).json({ message: 'Product/Milestone not found' });
}