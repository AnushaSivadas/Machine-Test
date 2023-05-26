const express = require("express");
const {
  createUser,
  getAllUsers,
  editUser,
  deleteUser,
  searchUser,
  filterUsers,
} = require("../controllers/UserController.js");
const router = express.Router();



router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.get("/users", searchUser);
router.get("/filter", filterUsers);

module.exports = router;
