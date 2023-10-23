const express = require('express');
const UserController = require('../controller/users.js');
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createNewUsers);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
module.exports = router;