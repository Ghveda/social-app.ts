import { Response, Request } from "express";
import { registerUser, loginUser } from "../service/user.service";

const register = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  const registerService = await registerUser(body);

  if (registerService.status) {
    res.status(registerService.status).json(registerService.error);
    return;
  }

  res.json(registerService);
  return;
};

const login = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;

  const loginService = await loginUser(body);
  if (loginService.status) {
    res.status(loginService.status).json(loginService.error);
    return;
  }

  res.json(loginService);
  return;
};

export { register, login };
