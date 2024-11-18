import userService from "../services/userService.js";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      status: "Ok",
      items: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUniqueUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUniqueUser(id);
    res.status(200).json({
      status: "Ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const createdUser = await userService.createUser(userData);
    res.status(200).json({
      status: "Ok",
      data: createdUser,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await userService.updateUser(id, userData);
    res.status(200).json({
      status: "Ok",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json({
      status: "Ok",
      data: deletedUser,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllUsers,
  getUniqueUser,
  createUser,
  updateUser,
  deleteUser,
};
