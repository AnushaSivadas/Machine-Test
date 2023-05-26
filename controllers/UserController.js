const UserModel = require("../models/UserModel.js");

module.exports.createUser = async (req, res) => {
  const newUser = new UserModel(req.body);
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.editUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.searchUser = async (req, res) => {
  const { name } = req.query;
  console.log(req.query)
  try {
    const regex = new RegExp(name, "i");
    const users = await UserModel.find({
      name: regex,
    }).sort("name");
    //users.sort((a, b) => a.name.localeCompare(b.name));
    console.log(users, "users");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports.filterUsers = async (req, res) => {
  try {
    const users = await UserModel.find(req.query).sort("name");
    //users.sort((a, b) => a.name.localeCompare(b.name));
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
     