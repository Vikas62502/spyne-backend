import Discussion from "../model/discussionSchema.js";

const getAllDiscussionBasedOnText = async (req, res) => {
    try {
        const { text } = req.query;
        const discussions = await Discussion.find({ text: { $regex: text, $options: 'i' } });
        res.status(200).json({ message: `All the discussion based on ${text}`, discussions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getAllDiscussionBasedOnText;