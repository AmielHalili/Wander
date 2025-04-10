import express from 'express';
import { deleteUser, getSingleUser, updateUser,  getAllUser} from './../controllers/userController.js';


import { verifyUser, verifyAdmin} from '../utils/verifyToken.js';
const router = express.Router();




//update new user
router.put("/:id", verifyUser, updateUser);
//delete new user
router.delete('/:id', verifyUser, deleteUser);
//get new user
router.get('/:id', verifyUser, getSingleUser);
//get all new user
router.get('/', verifyAdmin, getAllUser);


export default router