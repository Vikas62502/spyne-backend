import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  discussion: { type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
