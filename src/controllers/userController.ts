import { Response, Request } from "express";
import { registerUser } from "../service/user.service";

const register = async (req: Request, res: Response): Promise<void> => {
  const body = req.body();
  const registerService = await registerUser(body);

  res.json(registerService);
};

const login = (_: Request, res: Response): void => {
  res.json("somee login");
};

export { register, login };
