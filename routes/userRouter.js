const express = require('express');
const {
  GetAllUsers,
  AddNewUser,
  GetUserById,
  UpdateUserById,
  DeleteUserById,
} = require('./../controllers/userControllers');

const router = express.Router();

router.route('/').get(GetAllUsers).post(AddNewUser);

router
  .route('/:userId')
  .get(GetUserById)
  .patch(UpdateUserById)
  .delete(DeleteUserById);

module.exports = router;
