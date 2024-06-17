import express from 'express';
import auth from '../middleware/auth.js';
import createDiscussion from '../controller/createDiscussion.js';
import deleteDiscussion from '../controller/deleteDiscussion.js';
import getDiscussionByTags from '../controller/getDiscussionByTags.js';
import updateDiscussion from '../controller/updateDiscussion.js';
import getAllDiscussionBasedOnText from '../controller/getAllDiscussionBasedOnText.js';
import getViewCount from '../controller/getViewCount.js';

// initilized the router
const router = express.Router();
router.use(express.json()); // Parse JSON bodies

router.post('/createDiscussion', auth, createDiscussion)

router.delete('/deleteDiscussion/:discussionId', auth, deleteDiscussion)

router.put('/updateDiscussion/:discussionId', auth, updateDiscussion)

// get apis
router.get('/getAllDiscussionsByTags', auth, getDiscussionByTags)
router.get('/getAllDiscussionBasedOnText', auth, getAllDiscussionBasedOnText)
router.get('/getViewCount/:discussionId', auth, getViewCount)

export default router;