const userDao = require('../dao/userDao');
const validator = require('validator');
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

interface NewUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
const signUp = async (newUser: NewUser) => {
  try {
    if (!validator.isEmail(newUser.email)) {
      throw { message: "Email is invalid" };
    }
    newUser.password = await bcrypt.hash(newUser.password, saltRounds);
    return userDao.createUser(newUser);
  } catch (error: any) {
    console.error('Error during sign-in:', error);
    return { ...error };
  }
};

interface LoginData {
  email: string,
  password: string
}
const signIn = async (loginData: LoginData) => {
  try {
    const user = await userDao.findUser({ email: loginData.email });
    const isValidPassword = user && bcrypt.compareSync(loginData.password, user.password);

    if (isValidPassword) {
      const authToken = jwt.sign({ userId: user.email }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });
      return { authToken };
    }
    return { authToken: null, message: "Invalid email or password" };

  } catch (error: any) {
    console.error('Error during sign-in:', error);
    return { authToken: null, message: "An error occurred during sign-in" };
  }
}


export {
  signUp,
  signIn
};
