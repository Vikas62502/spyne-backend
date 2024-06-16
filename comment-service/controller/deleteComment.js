import Comment from "../model/commentSchema.js";

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.findByIdAndDelete(id);
        res.status(200).json({ message: 'Comment deleted successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default deleteComment;