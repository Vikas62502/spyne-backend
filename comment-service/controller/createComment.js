import Comment from "../model/commentSchema.js";
import Discussion from "../model/discussionSchema.js";

const createComment = async (req, res) => {
    try {
        const { text, discussionId } = req.body;
        const comment = new Comment({ text, discussion: discussionId, user: req.user });
        await comment.save();

        await Discussion.findByIdAndUpdate(discussionId, {
            $push: { comments: comment._id },
            $inc: { viewCount: 1 }
        });
        res.status(201).json({ message: 'Comment created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default createComment;   