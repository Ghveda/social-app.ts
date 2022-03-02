import { Response, Request } from "express";

const register = (_: Request, res: Response): void => {
  res.json("some register");
};

const login = (_: Request, res: Response): void => {
  res.json("somee login");
};

export { register, login };
