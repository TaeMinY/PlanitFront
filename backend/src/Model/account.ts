import { model, Schema, Model, Document } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_image : {
        type: String,
        required:true
    },
	userdata:{
		type: Object,
		required:true
	}
});
export interface UserDocument extends Document {
    username: string;
    password: string;
    enckey: string;
    email: string;
    profile_image : string;
	userdata: any;
}
const User: Model<UserDocument> = model('user', userSchema);
export default User;