import express from 'express';
import { body } from 'express-validator';
import { getLogout, getToken, postLogin, postSignup } from '../controllers/authController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

// Using express-validator: https://express-validator.github.io/docs/

const authRouter = express.Router();

authRouter.get('/logout', getLogout);
authRouter.get('/token', getToken);

authRouter.post('/login', [
  body('email')
    .exists().withMessage('You must provide an email')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .exists().withMessage('Password is required')
    .notEmpty().withMessage('Password cannot be empty')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], postLogin);

authRouter.post('/signup', [
  body('email')
    .exists().withMessage('You must provide an email')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .exists().withMessage('Password is required')
    .notEmpty().withMessage('Password cannot be empty')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
    .matches(/\d/).withMessage('Password must contain at least one number')
], postSignup);

export default authRouter;
