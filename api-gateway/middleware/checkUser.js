import jwt from 'jsonwebtoken';

const checkUser = (req, res, next) => {
    const jwtSecretKey = process.env.JWT_SECRET || "thisIsMySecretKey";
    const token = req.headers['authorization']?.split(' ')[1];
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
}

export default checkUser;