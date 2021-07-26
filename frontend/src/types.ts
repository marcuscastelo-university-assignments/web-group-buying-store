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
            {quantity: 0, price: 0}
        ],
        productId: 'loading',
        description: 'Loading...',
    } as ProductProps
};

export type CartProductProps = {
    productId: string,
    quantity: number,
};


export type CategoryDescription = {
    id: string,
    name: string,
    layer: string,
    imageSrc: string,
    parent?: string,
    final?: boolean
}

//TODO: download img?
export const DEFAULTS = Object.freeze({
    IMG_DEFAULT: '/img/no-preview.jpeg',
    PROFILE_DEFAULT: 'https://teamstake.com/admin/default/assets/img/no_image.png'
})

export type LayerDescription = CategoryDescription[];

export type CategoryLayersDescription =  { [layer: string]: LayerDescription };