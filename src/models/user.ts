import { model, Document, Schema } from 'mongoose';

export interface UserModel extends Document {
    first_name: String;
    last_name: String;
    age: Number;
    email: String;
}

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    email: String
});

export const User = model<UserModel>('User', UserSchema);
