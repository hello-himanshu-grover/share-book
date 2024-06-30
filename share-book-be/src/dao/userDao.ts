const { mongoDBClient } = require('../mongoClient');
const usersCollection = mongoDBClient.getCollection('users');

interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
const createUser = async (newUser: User) => {
  try {
    const res = await usersCollection.insertOne(newUser);
    return res;
  } catch (error: any) {
    if (error?.code === 11000) {
      throw { message: "User Already Exists" }
    } else {
      throw error;
    }
  }
};

interface FindUserQuery {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string
}
const findUser = async (query: FindUserQuery) => {
  return query ? usersCollection.findOne(query) : null;
};

export {
  createUser,
  findUser
};
