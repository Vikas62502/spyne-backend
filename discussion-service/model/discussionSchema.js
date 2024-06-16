import mongoose from 'mongoose';

const discussionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    hashtags: [String],
    createdOn: {
        type: Date,
        default: Date.now,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    viewCount: {
        type: Number,
        default: 0,
    }
}, { timestamp: true });

const Discussion = mongoose.model('Discussion', discussionSchema);
export default Discussion;
