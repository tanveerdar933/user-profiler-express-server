const User = require("./model");

/**       POST {baseURL}/user/add      **/
const addUser = async (req, res) => {
  const {
    name,
    email,
    age,
    picture
  } = req.body;
  console.log(req.body)
  // Check if it's a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.sendStatus(400);
  }

  try {
    const user = new User({
      name,
      email,
      age,
      picture
    });
    await user.save();
    return res.status(201).json({ message: 'Form submitted successfully' });
  }
  catch (err) {
    return res.status(500).json(err);
  }
}


/**       GET {baseURL}/user/get      **/
const getUsers = async (req, res) => {
  try {
    const response = await User.find({});
    const result = await response.json();
    return res.status(200).json(result);
  }
  catch (err) {
    return res.status(500).json(err);
  }
}



module.exports = {
  addUser,
  getUsers
}