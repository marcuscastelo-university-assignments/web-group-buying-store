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
    id: string,
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