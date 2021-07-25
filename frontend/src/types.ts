export type MilestoneProps = {
    quantity: number,
    price: number,
};

export type UserProps = {
    name: string,
    nick: string,
    email: string,
    profileImage: string,
    password: string,
    birthday: string,
    admin?: boolean
}

export type ProductCommentInfo = {
    author: string,
    title: string,
    content: string,
    rating: number,
    likes: number,
    dislikes: number,
    commentId: string,
}

export type ProductProps = {
    productId: string,
    title: string,
    description?: string,
    imageURL: string,
    categoryId: string,
    milestones: MilestoneProps[],
    currentQuantity: number,
    comments: ProductCommentInfo[],
    creator: string,
};

//An ProductProps that has all its fields as loading...
export const getLoadingProduct = () => {
    return {
        title: 'Loading...',
        categoryId: 'loading',
        comments: [
            {
                title: 'Loading...',
                author: 'loading',
                content: 'Loading...',
                dislikes: 0,
                likes: 0,
                rating: 0,
                commentId: 'loading',
            }
        ],
        creator: 'loading',
        currentQuantity: 0,
        imageURL: 'loading',
        milestones: [
        ],
        productId: 'loading',
        description: 'Loading...',
    } as ProductProps
};