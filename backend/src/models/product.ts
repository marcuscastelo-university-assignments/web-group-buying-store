import { model, Schema, Document } from 'mongoose';

interface Product {
    productID: string,
    title: string,
    description?: string,
    imageURL: string,
    categoryID: string,
    milestones: {
        quantity: number,
        price: number,
    }[];
    currentQuantity: number,
    comments: {
        [id: string]: {
            author: string,
            title: string,
            content: string,
            rating: number,
            likes: number,
            dislikes: number,
            id: string,
        }
    },
    creator: string,
};

interface ProductModel extends Product, Document { } 

const ProductSchema = new Schema({
    productID: { //TODO: pensar se usa o ID do mongo ou deixa assim
        type: String,
        required: true,
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
    categoryID: {
        type: String,
        required: true,
    },
    milestones: [{
        quantity: {
            type: Number,
            required: true
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
}, {
    timestamps: true,
});


export default model<ProductModel>('Product', ProductSchema);

