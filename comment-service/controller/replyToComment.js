const replyToComment = async (req, res) => {
    try {
        const { commentId, text } = req.body;
        const userId = req.user;

        const newReply = new Comment({
            user: userId,
            discussion: null,
            text,
        });

        const savedReply = await newReply.save();

        // adding to parent reply
        const parentComment = await Comment.findById(commentId);
        parentComment.replies.push(savedReply._id);
        await parentComment.save();

        res.status(201).json(savedReply);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default replyToComment;  
