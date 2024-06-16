import User from "../model/UserSchema.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ message: "List of all users", users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getAllUsers;