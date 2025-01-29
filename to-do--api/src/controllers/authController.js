import bcrypt from 'bcrypt';
import { validationResult, matchedData } from 'express-validator';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

// Defining what the token should look like
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, SECRET, {
        expiresIn: maxAge
    });
}

export const postLogin = async (req, res) => {
  try {
    const errorsResult = validationResult(req);
    if (!errorsResult.isEmpty()) {
      return res.status(400).json({ errors: errorsResult.array() });
    }

    const { email, password } = matchedData(req);

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = createToken(user.id);
      res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: maxAge * 1000
      })

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in', message: error.message });
  }
};

export const postSignup = async (req, res) => {
  try {
    const errorsResult = validationResult(req);
    if (!errorsResult.isEmpty()) {
      return res.status(400).json({ errors: errorsResult.array() });
    }

    const { email, password } = matchedData(req);

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error signing up', message: error.message });
  }
};

export const getLogout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: 'Logout successful' });
}
