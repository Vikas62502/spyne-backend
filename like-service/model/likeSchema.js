import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    entity: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel',
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Discussion', 'Comment'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamp: true });

const Like = mongoose.model('Like', likeSchema);
export default Like;
