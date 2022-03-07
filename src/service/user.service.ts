import { genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import { userBody } from "../interface/userInterface";
import User from "../models/User";
import { JWT_SECRET } from "../constants";

const registerUser = async (body: userBody) => {
  try {
    const { username, email, password } = body;
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (!user) {
      throw new Error("Email is used");
    }

    const token = sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      username,
      token,
    };
  } catch (error) {
    throw new Error("Error in registration");
  }
};

export { registerUser };
