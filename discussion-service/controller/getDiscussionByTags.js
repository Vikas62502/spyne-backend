import Discussion from "../model/discussionSchema.js";

const getDiscussionByTags = async (req, res) => {
    try {
        // const { tags } = req.body;
        const { tags } = req.query;
        console.log(req.query, "req.query")
        const discussions = await Discussion.find({ hashtags: { $in: tags } });
        res.status(200).json({ message: `All the tag of ${tags}`, discussions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getDiscussionByTags;