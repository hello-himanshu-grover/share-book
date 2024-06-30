import { Router, Request, Response } from 'express';
import { validateUser } from '../middlewares/validateUser';
const userService = require('../services/userServices');

const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    await userService.signUp({ firstName, lastName, email, password });
    res.status(200).send({ message: 'User Created', code: 'USER_CREATED' });
  } catch (error: any) {
    res.status(500).send({ message: error?.message, stack: error?.stack });
  }
})

router.post('/signin', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { authToken, message } = await userService.signIn({ email, password });
    if (authToken) {
      res.status(200).send({ data: { authToken }, code: 'LOGIN_SUCCESS' })
    } else {
      throw { message }
    }
  } catch (error: any) {
    res.status(500).send({ message: error?.message, stack: error?.stack });
  }
})


export { router as userRoutes };
