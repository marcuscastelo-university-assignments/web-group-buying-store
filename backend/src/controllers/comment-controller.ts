import { Request, Response, NextFunction } from 'express';
import Product, { ProductComment, ProductModel } from '../models/product';

export async function getComments(req: Request, res: Response) {
    //Get all comments from a product
    const productId = req.params.id;
    const product = await Product.findOne({ productId }).exec();
    if (!product)
        return res.json({ message: 'Product not found' });
    return res.json(product.comments);
}

export async function getComment(req: Request, res: Response) {
    //Get specific comment from product
    const productId = req.params.id;
    const commentId = req.params.cid;
    const product = await Product.findOne({ productId }).exec();
    if (product === null)
        return res.json({ message: 'Product not found' });

    const comment = product.comments.find(c => c.commentId == commentId);
    if (!comment)
        return res.json({ message: 'Comment not found' });

    return res.status(200).json(comment);
}

export async function createComment(req: Request, res: Response) {
    //Adds a new comment to product comments
    const productId = req.params.id;
    const comment = req.body as ProductComment;

    const result = await Product.updateOne(
        {
            productId,
            "comments.commentId": { $ne: comment.commentId }
        },
        {
            $push: {
                comments: comment
            }
        }).exec();

    if (result.n == 0)
        return res.status(404).json({ message: 'Product not found / Comment already exists' });
    if (result.nModified == 0)
        return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(comment);
}

export async function updateComment(req: Request, res: Response) {
    //Updates a comment
    const productId = req.params.id;
    const commentId = req.params.cid;
    const comment = req.body as ProductComment;

    const result = await Product.updateOne({ productId, "comments.commentId": commentId }, {
        $set: {
            'comments.$': comment
        }
    }).exec();

    if (result && result.n > 0)
        res.status(200).json(comment);
    else
        res.status(404).json({ message: 'Product/Comment not found' });
}


export async function deleteComment(req: Request, res: Response) {
    //Deletes a comment
    const productId = req.params.id;
    const commentId = req.params.cid;

    const result = await Product.updateOne({ productId }, {
        $pull: {
            comments: { commentId: commentId }
        }
    }).exec();

    if (result && result.nModified > 0)
        res.status(200).json({ message: 'Comment deleted' });
    else
        res.status(404).json({ message: 'Product/Comment not found' });
}
