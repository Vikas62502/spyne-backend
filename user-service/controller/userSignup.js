import User from "../model/UserSchema.js";

const userSignup = async (req, res) => {
    try {
        const { name, mobileNumber, email } = req.body;
        const user = new User({ name, mobileNumber, email });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default userSignup;