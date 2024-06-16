import User from "../model/UserSchema.js";
import jwt from 'jsonwebtoken';

const userLogin = async (req, res) => {
    const jwtSecretKey = process.env.JWT_SECRET || "thisIsMySecretKey";
    const tokenExpiresIn = process.env.JWT_EXPIRES_IN || '1h';
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: tokenExpiresIn });
        res.json({ token: token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default userLogin;