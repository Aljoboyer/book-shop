const UserCollection = require("./user.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  // console.log('Hitted signing', req.query)
  const { email, password } = req.body;

  try {
    const oldUser = await UserCollection.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, 'B00kSh0p007',  {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// User Signup
const userSignUpController = async (req, res) => {

    const { email, password, name } =
      req.body;

    try {
      const oldUser = await UserCollection.findOne({ email: email });
  
      if (oldUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserCollection.create({
        email: email,
        password: hashedPassword,
        userName: name,
      });
  

    const token = jwt.sign({ email: result.email, id: result._id }, 'B00kSh0p007' ,{
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });

    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  
module.exports = {
    userSignUpController,
    loginController  };