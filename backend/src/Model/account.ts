import { model, Schema, Model, Document } from 'mongoose';
const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userdata : {
        type: Object,
        required:true
    }
});
export interface UserDocument extends Document {
    id: string;
    password: string;
    enckey: string;
    nickname: string;
    email: string;
    userdata : Object;
}
const User: Model<UserDocument> = model('user', userSchema);
export default User;