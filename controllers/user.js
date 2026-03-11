const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "User not exist" });
  }
  return res.json(user);
}

async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lasttName: "Chnaged" });
  // EDIT USER WITH ID
  return res.json({ status: "Sucess" });
}

async function deleteUserById(req, res) {
  // DELETE USER WITH ID
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  //NEW USER Creation
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required." });
  }
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
  //     return res.status(201).json({ status: 'Success', id: users.length })
  // })

  const result = await User.create({
    firstName: body.first_name,
    lasttName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "Success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  updateUserById,
  deleteUserById,
  handleCreateNewUser,
};
