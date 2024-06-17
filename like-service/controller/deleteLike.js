import Like from "../model/likeSchema.js";

const deleteLike = async (req, res) => {
    try {
        const { likeId } = req.params;
        const userId = req.user;

        const removeLike = await Like.findByIdAndDelete(likeId);
        if (!removeLike) {
            return res.status(400).json({ message: 'Like not found' });
        }

        res.status(200).json({ message: 'Like removed', removeLike });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default deleteLike;