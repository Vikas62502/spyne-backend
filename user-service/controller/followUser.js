import User from "../model/UserSchema.js";

const followUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const currentUser = await User.findById(req.user);
        if (currentUser.following.includes(userId)) {
            return res.status(400).json({ message: 'You are already following this user' });
        }
        await currentUser.updateOne({ $push: { following: userId } });
        await user.updateOne({ $push: { followers: req.user } });
        res.status(200).json({ message: 'User followed successfully!' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default followUser;