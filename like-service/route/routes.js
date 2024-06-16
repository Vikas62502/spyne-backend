import express from 'express';
import auth from '../middleware/auth.js';
import createLike from '../controller/createLike.js';
import deleteLike from '../controller/deleteLike.js';

// initilized the router
const router = express.Router();
router.use(express.json()); // Parse JSON bodies

// create like
router.post('/like', auth, createLike);

// delete like
router.delete('/like/:likeId', auth, deleteLike);




export default router;