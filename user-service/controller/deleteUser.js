import User from "../model/UserSchema.js";

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        // validate user ID
        if (!userId) return res.status(400).json({ message: 'User ID is required' });
        const user = await User.findByIdAndDelete(userId, { new: true });
        res.json({ message: 'User deleted', user });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export default deleteUser;