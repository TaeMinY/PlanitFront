import { model, Schema, Model, Document } from 'mongoose';
const postSchema = new Schema({
    data: {
        type: Object,
        required: true
    },
	text: {
        type: String,
        required: true
    },
	like: {
        type: Number,
        required: true
    },
	like_users: {
        type: Array,
        required: true
    },
	time: {
        type: String,
        required: true
    },
	email:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	}
	
});
export interface PostDocument extends Document {
    data: any;
    text: string;
    like: number;
    like_users: any;
    time : string;
	email: string;
	name:string;
}
const Post: Model<PostDocument> = model('post', postSchema);
export default Post;