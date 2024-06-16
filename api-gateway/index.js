import gateway from 'fast-gateway';
import dotenv from 'dotenv';
import checkUser from './middleware/checkUser.js';
dotenv.config();

const server = gateway({
    // Gateway routes
    routes: [
        // {
        //     // Auth Service
        //     prefix: '/auth',
        //     target: 'http://localhost:3001',
        // },
        {
            // User Service
            prefix: '/users',
            target: 'http://localhost:3001',
            // middlewares: [checkUser],
        },
        {
            // Discussion Service
            prefix: '/discussions',
            target: 'http://localhost:3002'
        },
        {
            // Comment Service
            prefix: '/comments',
            target: 'http://localhost:3003'
        },
        {
            // Like Service
            prefix: '/likes',
            target: 'http://localhost:3004'
        }
    ]
});
server.start(3000).then(server => {
    console.log(`API Gateway listening on ${'3000'}`);
});
