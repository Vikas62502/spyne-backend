import Discussion from "../model/discussionSchema.js";

const createDiscussion = async (req, res) => {
    try {
        const userId = req.user;
        const { text, image, hashtags } = req.body;
        const discussion = new Discussion({
            text,
            image,
            hashtags,
            user: userId,
            $inc: { viewCount: 1 }
        });
        await discussion.save();
        res.status(201).json({ message: 'Discussion created successfully', discussion });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default createDiscussion;