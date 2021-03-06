import { model, Schema, Document } from 'mongoose';

//Typescript definition:
export interface ProductMilestone {
    quantity: number,
    price: number,
};

//the comments are about a specific product, structure:
export interface ProductComment {
    commentId: string,
    author: string,
    title: string,
    content: string,
    rating: number,
    likes: number,
    dislikes: number,
    id: string,
};

//product structure
export interface Product {
    productId: string,
    title: string,
    description?: string,
    imageURL: string,
    categoryId: string,
    milestones: ProductMilestone[],
    currentQuantity: number,
    comments: ProductComment[],
    creator: string,
};

//Adapter to use typescript
export interface ProductModel extends Product, Document {};

//Mongoose schema based on the typescript definitions above 
const ProductSchema = new Schema({
    productId: { 
        //TODO: pensar se usa o ID do mongo ou deixa assim
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    imageURL: {
        type: String,
        required: false,
    },
    categoryId: {
        type: String,
        required: true,
    },
    milestones: [{
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true
        }
    }],
    currentQuantity: {
        type: Number,
        required: true,
    },
    comments: [{
        commentId: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: false,
        },
        rating: {
            type: Number,
            required: true,
        },
        likes: {
            type: Number,
            required: false,
        },
        dislikes: {
            type: Number,
            required: false,
        },
    }],
    creator: {
        type: String,
        required: true,
    },
});


export default model<ProductModel>('Product', ProductSchema);

