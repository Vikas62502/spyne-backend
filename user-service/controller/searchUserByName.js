import User from "../model/UserSchema.js";

const searchUserByName = async (req, res) => {
    try {
        const { name } = req.params;
        const user = await User.find({ name: { $regex: name, $options: 'i' } });
        res.json({ message: 'User found', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export default searchUserByName;