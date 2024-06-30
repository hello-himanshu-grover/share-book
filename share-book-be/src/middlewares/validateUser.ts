import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
const userDao = require('../dao/userDao');

const validateUser: RequestHandler = async (req, res, next) => {
    try {
        const authToken = req.cookies.authToken || req.headers.authorization;
        if (!authToken) {
            throw { message: "Invalid Missing. Please login again."}
        }
        const decoded: any = jwt.verify(authToken, process.env.JWT_SECRET_KEY as string);
        const user = await userDao.findUser({email: decoded.userId});

        if (user) {
            next()
        } else {
            throw { message: "Invalid Token. Please login again."}
        }
    } catch (error: any) {
        res.status(500).send({ error: error });
    }
}

export {
    validateUser
};
