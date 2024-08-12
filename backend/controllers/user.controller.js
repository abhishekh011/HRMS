import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const generateToken = (email) => {
    let payload = { subject: email };
    return jwt.sign(payload, "asdfghjkl");
  };

export const signIn = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    if (user) {
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (isPasswordValid) {
        const userObject = user.toObject();
        return response.status(200).json({
          message: 'Sign In Successful',
          user: userObject,
          token: generateToken(email),
        });
      } else {
        return response.status(401).json({ error: 'Bad request', message: 'Invalid password' });
      }
    } else {
      return response.status(401).json({ error: 'Bad request', message: 'Invalid email id' });
    }
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
};

export const signUp = async (request, response, next) => {
  try {
    const {name, email, password } = request.body;
    let duplicat = password;
    let user = await User.findOne({ email });
    if (user) {
      return response.status(401).json({ message: 'Email already exists' });
    }
    const saltKey = bcrypt.genSaltSync(10);
       duplicat = bcrypt.hashSync(duplicat, saltKey);
    request.body.password = duplicat;

    let result = await User.create(request.body);
    result = result.toObject();

    return response.status(200).json({ message: 'Sign Up successful', user: result });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
};