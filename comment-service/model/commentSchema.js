import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  discussion: { type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
