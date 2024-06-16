import Comment from "../model/commentSchema.js";

const createComment = async (req, res) => {
    try {
        const { text, discussionId } = req.body;
        const comment = new Comment({ text, discussion: discussionId, user: req.user });
        await comment.save();
        res.status(201).json({ message: 'Comment created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default createComment;   