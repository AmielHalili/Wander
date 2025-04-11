import express from 'express';
import { register } from '../controllers/authController.js'
import { login } from '../controllers/authController.js'
//import { googleAuth } from '../controllers/authController.js'


const router = express.Router()

router.post('/register', register)
router.post('/login', login)
//router.post('/google', googleAuth)


export default router