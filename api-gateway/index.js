import gateway from 'fast-gateway';
import dotenv from 'dotenv';
import checkUser from './middleware/checkUser.js';
dotenv.config();


// Check if the environment is development
const isDevelopment = process.env.NODE_ENV === 'development';

const server = gateway({
    // Gateway routes
    routes: [
        {
            // User Service
            prefix: '/users',
            target: isDevelopment ? process.env.USER_SERVICE_URL : 'https://spyne-backend-user-service.onrender.com',
            // middlewares: [checkUser],
        },
        {
            // Discussion Service
            prefix: '/discussions',
            target: isDevelopment ? process.env.DISCUSSION_SERVICE_URL : 'https://spayne-backend-discussion-service.onrender.com',
        },
        {
            // Comment Service
            prefix: '/comments',
            target: isDevelopment ? process.env.COMMENT_SERVICE_URL : 'https://spyne-backend-comment-service.onrender.com',
        },
        {
            // Like Service
            prefix: '/likes',
            target: isDevelopment ? process.env.LIKE_SERVICE_URL : 'https://spyne-backend-like-service.onrender.com',
        }
    ]
});
server.start(3000).then(server => {
    console.log(`API Gateway listening on ${'3000'}`);
});
