const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  updateUserById,
  deleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

//Routes
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
