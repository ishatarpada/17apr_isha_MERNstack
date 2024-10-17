const User = require("../Models/userModel");

/* ------------------------------all Data---------------------------- */

async function allData(req, res) {
  // Fetch all users from MongoDB
  const allUsers = await User.find({});
  return res.json(allUsers);
}


/* ---------------------------show Data------------------------------- */

async function showData(req, res) {

  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  return res.json(user);
}


/* ------------------------Store Data---------------------------------- */

async function storeData(req, res) {
  try {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
      return res.status(400).json({ status: "error", message: "All fields are required" });
    }

    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });

    console.log(result);
    return res.status(201).json({ status: "success", id: result._id });
  } catch (error) {
    console.error("Error storing data:", error);
    return res.status(500).json({ status: "error", message: "Failed to store data" });
  }
}



/* ---------------------------Update Data------------------------------- */

async function updateData(req, res) {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    // Update the user in MongoDB
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found in the database" });
    }

    return res.json({ status: "success", user });
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).json({ status: "error", message: "Failed to update user data" });
  }
}



/* -------------------------------Delete Data--------------------------- */

async function deleteData(req, res) {
  try {
    const userId = req.params.id;

    // Delete the user from MongoDB
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found in the database" });
    }

    return res.json({ status: "success", message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    return res.status(500).json({ status: "error", message: "Failed to delete user data" });
  }
}


module.exports = {
  allData,
  showData,
  storeData,
  updateData,
  deleteData
}