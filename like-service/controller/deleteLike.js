import Like from "../model/likeSchema.js";

const deleteLike = async (req, res) => {
    try {
        const { likeId } = req.params;
        const userId = req.user._id;

        const like = await Like.findById(likeId);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        if (like.user.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized to delete this like' });
        }

        await like.remove();
        res.status(200).json({ message: 'Like removed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default deleteLike;