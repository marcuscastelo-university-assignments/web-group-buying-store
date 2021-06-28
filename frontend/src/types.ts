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
    productID: string,
    title: string,
    description?: string,
    imageURL: string,
    categoryID: string,
    milestones: MilestoneProps[];
    currentQuantity: number,
    comments: { [id: string] : ProductCommentInfo },
    creator: string, 
};