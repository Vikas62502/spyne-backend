import Discussion from "../model/discussionSchema.js";
import Like from "../model/likeSchema.js";

const createLike = async (req, res) => {
    try {
        const { entityId, onModel } = req.body;

        console.log(req.body.entityId, "eid")
        const userId = req.user;
        console.log(userId, "uid")

        // Check if the user has already liked the entity
        const existingLike = await Like.findOne({ user: userId, entity: entityId, onModel });
        if (existingLike) {
            return res.status(400).json({ message: 'You have already liked this item' });
        }

        const like = new Like({ user: userId, entity: entityId, onModel });
        await like.save();

        await Discussion.findByIdAndUpdate(entityId, {
            $push: {
                likes: like._id,
            },
            $inc: { viewCount: 1 }
        });

        res.status(201).json({ message: 'Like added', like });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export default createLike;