import { genSalt, hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { registerBody, loginBody } from "../interface/userInterface";
import User from "../models/User";
import { JWT_SECRET } from "../constants";

const registerUser = async (body: registerBody) => {
  try {
    const { username, email, password } = body;
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await User.findOne({ email });

    if (user) {
      return { status: 404, error: "EMAIL_EXISTS" };
    }
    const createUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = sign({ id: createUser._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      username,
      token,
    };
  } catch (error) {
    return { status: 404, error };
  }
};

const loginUser = async (body: loginBody) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (!user) {
    return { status: 404, error: "Email or password is incorrect" };
  }
  const comparePassword = await compare(password, user.password);

  if (!comparePassword) {
    return { status: 404, error: "Email or password is incorrect" };
  }

  const token = sign({ id: user._id }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return { token };
};

export { registerUser, loginUser };
