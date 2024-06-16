import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {

    const jwtSecretKey = process.env.JWT_SECRET || "thisIsMySecretKey";

    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({ message: 'authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, jwtSecretKey);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default auth;
