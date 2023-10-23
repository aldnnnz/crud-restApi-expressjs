const userModel = require("../models/users");

const getAllUsers = async (req, res) => {
  const [data] = await userModel.getAllUsers();
  try {
    res.json({
      message: 'GET all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failed',
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  
  const {body} = req;
  try {
       await userModel.createNewUsers(body);
         res.json({
           message: "CREATE new user success",
           data: body,
         });
       
  } catch (error) {
       res.status(500).json({
              message: 'failed',
              serverMessage: error,
       });
  }
};

const updateUser = async (req, res) => {
  const {idUser} = req.params;
  const {body} = req;
  try {
    await userModel.updateUsers(body, idUser);
    res.json({
      message: 'UPDATE user succes',
      data: {
        id: idUser,
        ...body
      },
    })
  } catch(error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
  console.log('idUser: ', idUser);
};
const deleteUser = async(req, res) => {
  const {idUser} = req.params;
  try {
    await userModel.deleteUser(idUser);
    res.json({
      message: 'DELETE user succes',
      data: null
    })
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
};
module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
