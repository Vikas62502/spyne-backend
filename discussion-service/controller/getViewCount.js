import Discussion from "../model/discussionSchema.js";

const getViewCount = async (req, res) => {
    try {
        const { discussionId } = req.params;
        const discussion = await Discussion.findById(discussionId, 'viewCount');
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        res.json({ viewCount: discussion.viewCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getViewCount;