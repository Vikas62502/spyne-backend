import Discussion from "../model/discussionSchema.js";

const updateDiscussion = async (req, res) => {
    try {
        const { discussionId } = req.params;
        if (!discussionId) return res.status(400).json({ message: 'Discussion id is required' });
        const { text, image, hashtags } = req.body;
        const discussion = await Discussion.findByIdAndUpdate(discussionId, {
            text,
            image,
            hashtags,
        }, { new: true });
        res.status(200).json({ message: 'Discussion updated successfully', discussion });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default updateDiscussion;