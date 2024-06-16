import Comment from "../model/commentSchema.js";

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(id, { text }, { new: true });
        res.status(200).json({ message: 'Comment updated successfully!', updatedComment });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default updateComment;