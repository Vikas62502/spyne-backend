import Comment from "../model/commentSchema.js";

const replyToComment = async (req, res) => {
    try {
        const { commentId, text } = req.body;
        const userId = req.user;
        const newReply = new Comment({
            user: userId,
            text,
        });

        const savedReply = await newReply.save();

        const parentComment = await Comment.findById(commentId);
        parentComment.replies.push(savedReply._id);
        await parentComment.save();

        res.status(201).json(parentComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default replyToComment;  
