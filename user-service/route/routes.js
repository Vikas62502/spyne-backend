import express from 'express';
import userLogin from '../controller/userLogin.js';
import userSignup from '../controller/userSignup.js';
import auth from '../middleware/auth.js';
import getAllUsers from '../controller/getAllUsers.js';
import searchUserByName from '../controller/searchUserByName.js';
import updateUser from '../controller/updateUser.js';
import deleteUser from '../controller/deleteUser.js';

// initilized the router
const router = express.Router();
router.use(express.json()); // Parse JSON bodies


router.post('/login', userLogin);  // login route
router.post('/signup', userSignup); // signup route

// routes with middleware
router.get('/getAllUsers', auth, getAllUsers); // get all users route
router.get('/searchUserByName/:name', auth, searchUserByName); // search user by name route
router.put('/updateUser/:userId', auth, updateUser); // update user route
router.delete('/deleteUser/:userId', auth, deleteUser); // delete user route

export default router;