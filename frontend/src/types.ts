
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
}

export type ProductCommentProps = {
    author: UserProps,
    title: string,
    content: string,
    rating: number,
    likes: number,
    dislikes: number
}

export type ProductProps = {
    productID: string,
    title: string,
    description?: string,
    imageURL: string,
    category: string,
    milestones: MilestoneProps[];
    currentQuantity: number,
    comments?: ProductCommentProps[],
};