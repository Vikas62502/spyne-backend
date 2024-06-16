import User from "../model/UserSchema.js";

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        // validate user ID
        if (!userId) return res.status(400).json({ message: 'User ID is required' });

        const { name, mobileNumber, email } = req.body;
        const user = await User.findByIdAndUpdate(userId, {
            name,
            mobileNumber,
            email
        }, { new: true });
        res.json({ message: 'User modified', user });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export default updateUser;