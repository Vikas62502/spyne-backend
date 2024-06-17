import Discussion from "../model/discussionSchema.js";

const deleteDiscussion = async (req, res) => {
    try {
        const { discussionId } = req.params;
        if (!discussionId) return res.status(400).json({ message: 'Discussion id is required' });
        await Discussion.findByIdAndDelete(discussionId);
        res.status(200).json({ message: 'Discussion deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default deleteDiscussion;