import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
}

async function getUniqueUser(id) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

async function createUser(data) {
  try {
    const userCreated = await prisma.user.create({
      data: {
        ...data,
      },
    });
    return userCreated;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    const userUpdated = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return userUpdated;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const userDeleted = await prisma.user.delete({
      where: {
        id,
      },
    });
    return userDeleted;
  } catch (error) {
    throw error;
  }
}

export default {
  getAllUsers,
  getUniqueUser,
  createUser,
  updateUser,
  deleteUser,
};
