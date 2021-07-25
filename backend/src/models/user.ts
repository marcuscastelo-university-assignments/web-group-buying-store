import { model, Schema, Document } from 'mongoose';

//Typescript definition
export type User = {
    name: string,
    nick: string,
    email: string,
    profileImage: string,
    password: string,
    birthday: string,
    admin?: boolean
}

//Adapter for typescript
export interface UserModel extends User, Document {};

//Mongoose schema for user
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nick: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: false,
    },
});

export default model<UserModel>('User', UserSchema);