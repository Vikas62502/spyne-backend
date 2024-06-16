import express from 'express';
import auth from '../middleware/auth.js';
import createDiscussion from '../controller/createDiscussion.js';

// initilized the router
const router = express.Router();
router.use(express.json()); // Parse JSON bodies

router.post('/createDiscussion', auth, createDiscussion)


export default router;