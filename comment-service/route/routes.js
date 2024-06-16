import express from 'express';
import auth from '../middleware/auth.js';
import createComment from '../controller/createComment.js';
import updateComment from '../controller/updateComment.js';
import deleteComment from '../controller/deleteComment.js';


// initilized the router
const router = express.Router();
router.use(express.json()); // Parse JSON bodies


// create comment
router.post('/createComment', auth, createComment);

// update comment
router.put('/updateComment/:id', auth, updateComment);

// delete comment
router.delete('/deleteComment/:id', auth, deleteComment);

export default router;